import asyncio
import websockets
import json
import os

async def main():
    async with websockets.connect("ws://127.0.0.1:18000") as ws:
        req_id = str(os.urandom(4).hex())
        await ws.send(json.dumps({
            "type": "LIST_NOTEBOOKS",
            "requestId": req_id
        }))
        print("Sent request, waiting for response...")
        try:
            response = await asyncio.wait_for(ws.recv(), timeout=60.0)
            data = json.loads(response)
            if "result" in data:
                print(f"Success! Got {len(data['result'])} notebooks.")
            else:
                print("Error:", data)
        except asyncio.TimeoutError:
            print("Timed out waiting for notebooks.")

asyncio.run(main())
