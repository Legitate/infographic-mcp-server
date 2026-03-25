import asyncio
from mcp.server.fastmcp import FastMCP, Image

mcp = FastMCP("Test")

@mcp.tool()
def test_tool() -> list:
    return ["Hello", Image(data=b"dummy", format="jpeg")]

print(mcp._tools["test_tool"].fn())
