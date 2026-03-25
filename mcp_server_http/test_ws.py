import asyncio
import websockets
import json

async def test_client():
    uri = "ws://127.0.0.1:18000"
    print(f"Connecting to {uri}...")
    try:
        async with websockets.connect(uri) as websocket:
            print("Connected! Sending HEARTBEAT...")
            await websocket.send(json.dumps({"type": "HEARTBEAT"}))
            
            print("Waiting for messages...")
            while True:
                response = await websocket.recv()
                print(f"Received: {response}")
                
    except websockets.exceptions.ConnectionClosed as e:
        print(f"Connection closed: {e}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    asyncio.run(test_client())
