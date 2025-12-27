const http = require("http");
const url = require("url");

let requestCount = 0;

const server = http.createServer((req, res) => {
    requestCount++;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);

    res.setTimeout(5000, () => {
        res.statusCode = 408;
        res.end(JSON.stringify({ message: "Request Timeout", requests: requestCount }));
    });

    const parsed = url.parse(req.url, true);
    const path = parsed.pathname;

    if (req.method === "GET" && path === "/") {
        return res.end(JSON.stringify({
            message: "Welcome to Mini API Server!",
            requests: requestCount
        }));
    }

    if (req.method === "GET" && path === "/time") {
        return res.end(JSON.stringify({
            time: new Date().toISOString(),
            requests: requestCount
        }));
    }

    if (req.method === "POST" && path === "/echo") {
        let body = "";
        req.on("data", chunk => (body += chunk));

        req.on("end", () => {
            try {
                const json = JSON.parse(body);
                res.end(JSON.stringify({
                    received: json,
                    requests: requestCount
                }));
            } catch (err) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: "Invalid JSON", requests: requestCount }));
            }
        });
        return;
    }

    if (req.method === "GET" && path === "/square") {
        const num = Number(parsed.query.number);

        if (!num && num !== 0) {
            res.statusCode = 400;
            return res.end(JSON.stringify({
                message: "Missing or invalid ?number parameter",
                requests: requestCount
            }));
        }

        return res.end(JSON.stringify({
            input: num,
            square: num * num,
            requests: requestCount
        }));
    }

    if (req.method === "POST" && path === "/sum") {
        let body = "";
        req.on("data", chunk => (body += chunk));

        req.on("end", () => {
            try {
                const numbers = JSON.parse(body);

                if (!Array.isArray(numbers)) {
                    res.statusCode = 400;
                    return res.end(JSON.stringify({
                        message: "Body must be JSON array",
                        requests: requestCount
                    }));
                }

                const total = numbers.reduce((a, b) => a + b, 0);

                res.end(JSON.stringify({
                    numbers,
                    sum: total,
                    requests: requestCount
                }));
            } catch {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: "Invalid JSON", requests: requestCount }));
            }
        });
        return;
    }

    if (req.method === "GET" && path === "/info") {
        return res.end(JSON.stringify({
            address: server.address(),
            httpVersion: req.httpVersion,
            requests: requestCount
        }));
    }

    res.statusCode = 404;
    res.end(JSON.stringify({
        message: "Route not found",
        requests: requestCount
    }));
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
