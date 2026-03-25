from mcp.server.fastmcp import FastMCP
from mcp.types import ImageContent

print(ImageContent)
import mcp.server.fastmcp as fastmcp
print(fastmcp.__all__ if hasattr(fastmcp, '__all__') else dir(fastmcp))
