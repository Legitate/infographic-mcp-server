import asyncio
import json
import logging
import os
import subprocess
import sys
import websockets
import argparse
from mcp.server.fastmcp import FastMCP, Image

# Configuration
WS_PORT = 18000
EXTENSION_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'serverless_extension'))
PROFILE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), 'mcp-profile'))
CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"  # MacOS Default

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(os.path.join(os.path.dirname(__file__), 'server.log')),
        logging.StreamHandler(sys.stderr)
    ]
)
logger = logging.getLogger("mcp-server")

# Initialize MCP
mcp = FastMCP("Infographic Generator")

# Global State
connected_extension = None
generation_futures = {}
chrome_process = None
VISIBLE_MODE = True
CUSTOM_PROFILE_DIR = None


@mcp.tool()
async def generate_infographic(url: str, title: str = None):
    """
    Generate an infographic from a YouTube video URL using NotebookLM.
    Returns an Image containing the generated infographic.
    """
    await ensure_connection()

    future = asyncio.get_running_loop().create_future()
    request_id = str(os.urandom(4).hex())
    generation_futures[request_id] = future

    # Send command to extension
    command = {
        "type": "GENERATE",
        "url": url,
        "title": title,
        "requestId": request_id
    }
    
    try:
        await connected_extension.send(json.dumps(command))
        logger.info(f"Sent generation request {request_id} for {url}")
        
        # Wait for result (give it up to 10 minutes to finish)
        result = await asyncio.wait_for(future, timeout=600.0)
        
        if isinstance(result, str) and result.startswith("data:image"):
            import base64
            header, encoded = result.split(",", 1)
            ext = header.split(";")[0].split("/")[1]
            image_data = base64.b64decode(encoded)
            return Image(data=image_data, format=ext)
            
        return result
        
    except Exception as e:
        if request_id in generation_futures:
            del generation_futures[request_id]
        raise RuntimeError(f"Generation failed: {str(e)}")

@mcp.tool()
async def list_notebooks() -> str:
    """
    List all notebooks available in the connected NotebookLM account.
    Returns a JSON string containing a list of objects with 'id' and 'title'.
    """
    await ensure_connection()

    future = asyncio.get_running_loop().create_future()
    request_id = str(os.urandom(4).hex())
    generation_futures[request_id] = future

    command = {
        "type": "LIST_NOTEBOOKS",
        "requestId": request_id
    }

    try:
        logger.info(f"Sending LIST_NOTEBOOKS request {request_id}")
        await connected_extension.send(json.dumps(command))
        result = await asyncio.wait_for(future, timeout=120.0)
        
        return json.dumps(result, indent=2)
    except Exception as e:
        if request_id in generation_futures:
            del generation_futures[request_id]
        logger.error(f"List notebooks failed: {str(e)}")
        raise RuntimeError(f"List notebooks failed: {str(e)}")

@mcp.tool()
async def get_notebook_content(notebook_id: str) -> str:
    """
    Get the content of a specific notebook, including its sources.
    Returns a JSON string with the notebook content.
    """
    await ensure_connection()

    future = asyncio.get_running_loop().create_future()
    request_id = str(os.urandom(4).hex())
    generation_futures[request_id] = future

    command = {
        "type": "GET_NOTEBOOK_CONTENT",
        "notebookId": notebook_id,
        "requestId": request_id
    }

    try:
        await connected_extension.send(json.dumps(command))
        result = await future
        return json.dumps(result, indent=2)
    except Exception as e:
        if request_id in generation_futures:
            del generation_futures[request_id]
        raise RuntimeError(f"Get notebook content failed: {str(e)}")

@mcp.tool()
async def generate_combined(urls: list[str], title: str = None):
    """
    Generate a combined infographic from multiple YouTube video URLs.
    Returns an Image containing the generated infographic.
    """
    await ensure_connection()

    future = asyncio.get_running_loop().create_future()
    request_id = str(os.urandom(4).hex())
    generation_futures[request_id] = future

    command = {
        "type": "GENERATE_COMBINED",
        "urls": urls,
        "title": title,
        "requestId": request_id
    }

    try:
        await connected_extension.send(json.dumps(command))
        logger.info(f"Sent combined generation request {request_id} for {len(urls)} urls")
        result = await future
        
        if isinstance(result, str) and result.startswith("data:image"):
            import base64
            header, encoded = result.split(",", 1)
            ext = header.split(";")[0].split("/")[1]
            image_data = base64.b64decode(encoded)
            return Image(data=image_data, format=ext)
            
        return result
    except Exception as e:
        if request_id in generation_futures:
            del generation_futures[request_id]
        raise RuntimeError(f"Combined generation failed: {str(e)}")

@mcp.tool()
async def generate_separately(urls: list[str], title: str = None):
    """
    Generate separate infographics for multiple YouTube video URLs.
    Returns a list of Images containing the generated infographics.
    """
    await ensure_connection()

    future = asyncio.get_running_loop().create_future()
    request_id = str(os.urandom(4).hex())
    generation_futures[request_id] = future

    command = {
        "type": "GENERATE_SEPARATELY",
        "urls": urls,
        "title": title,
        "requestId": request_id
    }

    try:
        await connected_extension.send(json.dumps(command))
        logger.info(f"Sent separated generation request {request_id} for {len(urls)} urls")
        result = await future
        
        if isinstance(result, list):
            saved_results = []
            import base64
            for idx, res in enumerate(result):
                if isinstance(res, str) and res.startswith("data:image"):
                    header, encoded = res.split(",", 1)
                    ext = header.split(";")[0].split("/")[1]
                    image_data = base64.b64decode(encoded)
                    saved_results.append(Image(data=image_data, format=ext))
                else:
                    saved_results.append(res)
            return saved_results

        return result
    except Exception as e:
        if request_id in generation_futures:
            del generation_futures[request_id]
        raise RuntimeError(f"Separated generation failed: {str(e)}")

async def ws_handler(websocket):
    global connected_extension
    connected_extension = websocket
    logger.info("Extension Connected!")
    
    try:
        async for message in websocket:
            data = json.loads(message)
            msg_type = data.get("type")
            
            if msg_type == "GENERATION_COMPLETE" or msg_type == "TOOL_COMPLETE":
                req_id = data.get("requestId")
                # For GENERATION_COMPLETE, result is in imageUrl or imageUrls. For TOOL_COMPLETE, it's in result.
                if msg_type == "GENERATION_COMPLETE":
                    result_data = data.get("imageUrls") if "imageUrls" in data else data.get("imageUrl")
                else:
                    result_data = data.get("result")
                error = data.get("error")
                
                if req_id in generation_futures:
                    fut = generation_futures[req_id]
                    if error:
                        fut.set_exception(RuntimeError(error))
                    else:
                        fut.set_result(result_data)
                    del generation_futures[req_id]
                    
            elif msg_type == "HEARTBEAT":
                pass
                
    except websockets.exceptions.ConnectionClosed:
        logger.info("Extension Disconnected")
    finally:
        if connected_extension == websocket:
            connected_extension = None

async def start_ws_server():
    global ws_server
    try:
        if sys.platform == "darwin" or sys.platform == "linux":
            # Attempt to clear the port if a zombie process is holding it
            import subprocess
            subprocess.run(f"lsof -i :{WS_PORT} -t | xargs kill -9", shell=True, stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)
            await asyncio.sleep(0.5)
            
        ws_server = await websockets.serve(ws_handler, "localhost", WS_PORT, max_size=10_485_760, ping_timeout=120)
        logger.info(f"WebSocket server started on ws://localhost:{WS_PORT}")
        await asyncio.Future()  # Run forever
    except OSError as e:
        logger.error(f"Failed to start WebSocket server on port {WS_PORT}. Is another instance running? Error: {e}")
    except Exception as e:
        logger.error(f"WebSocket server error: {e}")

def get_chrome_data_dir():
    if sys.platform == "darwin":
        return os.path.expanduser("~/Library/Application Support/Google/Chrome")
    elif sys.platform == "win32":
        return os.path.expandvars(r"%LOCALAPPDATA%\Google\Chrome\User Data")
    else:
        return os.path.expanduser("~/.config/google-chrome")

def find_profiles_with_extension(extension_path):
    chrome_data_dir = get_chrome_data_dir()
    found_profiles = []
    
    if not os.path.exists(chrome_data_dir):
        return found_profiles

    for entry in os.listdir(chrome_data_dir):
        profile_path = os.path.join(chrome_data_dir, entry)
        if not os.path.isdir(profile_path):
            continue
            
        for pref_file in ["Secure Preferences", "Preferences"]:
            pref_path = os.path.join(profile_path, pref_file)
            if not os.path.exists(pref_path):
                continue
                
            try:
                with open(pref_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                if "serverless_extension" not in content and "infographic" not in content.lower():
                    continue
                    
                prefs = json.loads(content)
                extensions = prefs.get('extensions', {}).get('settings', {})
                
                for ext_id, ext_info in extensions.items():
                    path = ext_info.get('path', '')
                    name = ext_info.get('manifest', {}).get('name', '')
                    disable_reasons = ext_info.get('disable_reasons')
                    
                    if (path and os.path.normpath(extension_path) in os.path.normpath(path)) or "Infographic Generator for YouTube" in str(name):
                        if disable_reasons:
                            logger.info(f"Skipping profile '{entry}' as the extension is installed but disabled (disable_reasons: {disable_reasons})")
                        else:
                            found_profiles.append((chrome_data_dir, entry))
                        break
                        
            except Exception:
                pass

    return found_profiles

def is_chrome_running():
    try:
        if sys.platform == "darwin":
            output = subprocess.check_output(["pgrep", "-f", "Google Chrome"]).decode()
            return len(output.strip()) > 0
        elif sys.platform == "win32":
            output = subprocess.check_output('tasklist /FI "IMAGENAME eq chrome.exe"', shell=True).decode()
            return "chrome.exe" in output
        else:
            output = subprocess.check_output(["pgrep", "-f", "chrome"]).decode()
            return len(output.strip()) > 0
    except subprocess.CalledProcessError:
        return False

def launch_chrome(headless=True, user_data_dir=None, profile_name=None):
    if user_data_dir is None or profile_name is None:
        user_data_dir = os.path.dirname(PROFILE_DIR)
        profile_name = os.path.basename(PROFILE_DIR)
    
    args = [
        CHROME_PATH,
        f"--user-data-dir={user_data_dir}",
        f"--profile-directory={profile_name}",
        f"--load-extension={EXTENSION_PATH}",
        "--no-first-run",
        "--no-default-browser-check"
    ]
    
    if headless:
        args.append("--headless=new")
        
    logger.info(f"Launching Chrome with profile '{profile_name}' (Headless: {headless})...")
    global chrome_process
    log_file = open(os.path.join(os.path.dirname(__file__), 'chrome.log'), 'a')
    chrome_process = subprocess.Popen(args, stdout=log_file, stderr=log_file, stdin=subprocess.DEVNULL, close_fds=True)

def start_chrome(force_launch=False):
    if CUSTOM_PROFILE_DIR:
        launch_chrome(headless=not VISIBLE_MODE)
    else:
        logger.info("Scanning Chrome profiles for the installed extension...")
        profiles = find_profiles_with_extension(EXTENSION_PATH)
        if profiles:
            logger.info(f"Found extension in {len(profiles)} profile(s): {[p[1] for p in profiles]}")
            selected_profile = next((p for p in profiles if p[1] == "Default"), profiles[0])
            logger.info(f"Selected profile: {selected_profile[1]}")
            
            if not force_launch and is_chrome_running():
                logger.info("Chrome is already running. The extension will connect automatically.")
            else:
                if force_launch:
                    logger.info("Force launching Chrome (user might have closed all windows)...")
                else:
                    logger.info("Chrome is not running. Launching Chrome...")
                launch_chrome(headless=not VISIBLE_MODE, user_data_dir=selected_profile[0], profile_name=selected_profile[1])
        else:
            logger.info("Extension not found in any Chrome profile. Using default test profile.")
            launch_chrome(headless=not VISIBLE_MODE)

async def ensure_connection():
    global connected_extension
    if connected_extension:
        return True
        
    logger.info("Extension not connected. Attempting to start Chrome...")
    start_chrome(force_launch=True)
    
    # Wait for connection to establish
    for _ in range(150): # Wait up to 15 seconds
        if connected_extension:
            logger.info("Successfully reconnected to extension!")
            return True
        await asyncio.sleep(0.1)
        
    raise RuntimeError("Chrome Extension is not connected. Chrome might not be running or the extension is disabled.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--visible", action="store_true")
    parser.add_argument("--profile-dir", type=str)
    parsed_args, _ = parser.parse_known_args()
    
    CUSTOM_PROFILE_DIR = parsed_args.profile_dir
    if parsed_args.profile_dir:
        PROFILE_DIR = os.path.abspath(parsed_args.profile_dir)
        
    VISIBLE_MODE = parsed_args.visible or True # Default to TRUE for debugging
    
    # 1. Start or find Chrome
    start_chrome()
    
    # 2. Start WebSocket Server (Background Task)
    async def main():
        # Start WS Server as a task
        server_task = asyncio.create_task(start_ws_server())
        
        # Start MCP 
        await mcp.run_stdio_async()

    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logger.info("Stopping...")
    except Exception as e:
        logger.exception(f"Unhandled exception in MCP server: {e}")
    finally:
        logger.info("Cleaning up...")
        if chrome_process:
            logger.info("Terminating Chrome...")
            chrome_process.terminate()
            try:
                chrome_process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                chrome_process.kill()
            logger.info("Chrome terminated.")
