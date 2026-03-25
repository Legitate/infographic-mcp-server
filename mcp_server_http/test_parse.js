const fs = require('fs');

const responseText = fs.readFileSync('/Users/vigneshdhanraj/Desktop/infographic-generation-main/mcp_server/notebooklm_response.txt', 'utf8');

const rpcId = "wXbhsf";

function parseEnvelope(text, rpcId) {
    if (text.startsWith(")]}'")) text = text.substring(4);

    const lines = text.split('\n');
    let results = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        try {
            if (trimmed.startsWith('[')) {
                const obj = JSON.parse(trimmed);
                if (Array.isArray(obj)) results.push(obj);
            }
        } catch (e) { }
    }

    const validObjects = results.flat();

    for (const chunk of validObjects) {
        if (Array.isArray(chunk) && chunk.length > 2 && chunk[1] === rpcId) {
            const inner = chunk[2];
            if (inner) {
                try {
                    return JSON.parse(inner);
                } catch (e) {
                    return inner;
                }
            }
        }
    }
    return [];
}

const response = parseEnvelope(responseText, rpcId);


const notebooks = [];
const seenIds = new Set();
try {
    // Traverse response to find the list.
    function findNotebooks(obj) {
        if (!obj || typeof obj !== 'object') return;

        if (Array.isArray(obj)) {
            if (obj.length > 2 && typeof obj[0] === 'string' && typeof obj[2] === 'string' &&
                obj[2].length === 36 && obj[2].split('-').length === 5) {
                const id = obj[2];
                const title = obj[0] || "Untitled Notebook"; // Handle empty titles

                // UUID check
                if ((id.match(/-/g) || []).length === 4) {
                    if (!seenIds.has(id)) {
                        seenIds.add(id);
                        notebooks.push({ id: id, title: title });
                    }
                }
            }
            obj.forEach(findNotebooks);
        } else {
            Object.values(obj).forEach(findNotebooks);
        }
    }
    const start = Date.now();
    findNotebooks(response);
    const end = Date.now();
    console.log(`NotebookLMClient: Found ${notebooks.length} notebooks in ${end - start}ms`);
} catch (e) {
    console.error("Error parsing listNotebooks response:", e);
}

