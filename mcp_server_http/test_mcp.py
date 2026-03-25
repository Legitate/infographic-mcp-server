from mcp.server.fastmcp import FastMCP, Image

mcp = FastMCP('test')

@mcp.tool()
def test_tool():
    return Image(data=b'hello', format='png')

print("All ok")
