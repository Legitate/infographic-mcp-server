# Infographic Generation MCP Server

This project is a Model Context Protocol (MCP) server that works with a companion Chrome extension to automatically generate infographics from YouTube videos using Google's NotebookLM. The server interacts with the extension via websockets to drive the generation process directly in your browser.

## Setup Instructions

### 1. Install Dependencies
You need Python installed. Navigate to the `mcp_server` directory and install the required packages:

```bash
cd mcp_server
pip install -r requirements.txt
```

### 2. Chrome Extension Setup
1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** in the top right corner.
3. Click **Load unpacked** and select the `serverless_extension` directory from this repository.
4. Keep Chrome running or allow the MCP server to launch it automatically.

### 3. Claude Desktop Configuration
To use this server with Claude Desktop, you need to add it to your Claude Desktop configuration file.
On macOS, this is typically located at `~/Library/Application Support/Claude/claude_desktop_config.json`.

Add the following to your `mcpServers` object:

```json
{
  "mcpServers": {
    "infographic-gen": {
      "command": "/path/to/your/python",
      "args": [
        "/absolute/path/to/infographic-generation/mcp_server/server.py",
        "--visible"
      ]
    }
  }
}
```
*Note: Replace `/path/to/your/python` with the absolute path to your Python executable (e.g., from a virtual environment or conda) and `/absolute/path/to/...` with the absolute path to the `server.py` file.*

## Available Tools

The MCP server exposes the following capabilities to Claude:

- **`generate_infographic(url: str, title: str = None)`**: 
  Generates an infographic from a single YouTube video URL. The image is downloaded to your local `Downloads` folder using the provided `title`, and returned to Claude so it can be viewed inline.
  
- **`generate_combined(urls: list[str], title: str = None)`**: 
  Generates a single, combined infographic summarizing multiple YouTube video URLs. The resulting image is downloaded to your `Downloads` folder using the provided `title`.
  
- **`generate_separately(urls: list[str], title: str = None)`**: 
  Generates separate infographics for each of the provided YouTube video URLs. Returns a list of paths for the downloaded images in your `Downloads` folder.
  
- **`list_notebooks()`**: 
  Lists all available Notebooks in your connected NotebookLM account.
  
- **`get_notebook_content(notebookId: str)`**: 
  Retrieves the text content and sources of a specific Notebook by its ID.
