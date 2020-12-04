const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs');
//let counter = 0;

function handler(req, res) {
    try {
        const parsedURL = URL.parse(req.url);
        switch (parsedURL.pathname) {
            case "/":
                serveStatic(req, res, "index.html");
                break;
            case "/static/main.css":
                serveStatic(req, res, "main.css");
                break;
            case "/product":
                serveStatic(req, res, "product.html");
                break;
            case "/product1":
                serveStatic(req, res, "product1.html");
                break;
            case "/static/product.css":
                serveStatic(req, res, "product.css");
                break;
            case "/static/product.png":
                serveStatic(req, res, "product.png");
                break;
            case "/static/product1.png":
                serveStatic(req, res, "product1.png");
                break;
        }
    }
    catch (err) {
        console.error(err)
    }
    console.log("Request, url:", req.url);
}

function serveStatic(req, res, customFileName) {
    const filename = customFileName ? customFileName : path.basename(req.url);
    const extension = path.extname(filename);
    switch (extension) {
        case '.html':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
            break;
        case '.css':
            res.writeHead(200, { 'Content-Type': 'text/css; charset=utf8' });
            break;
        case '.png':
            res.writeHead(200, { 'Content-Type': 'image/png; charset=utf8' });
            break;
    }
    const readable = fs.createReadStream('static/' + filename);
    readable.pipe(res);
}

const server = http.createServer(handler);
server.listen(process.env.PORT);


// Not in use
/*function serveIndex(req, res) {
    if (req.url != "/favicon.ico") {
        counter++;
    }
}

function serveCounter(req, res) {
    res.write(`Номер запроса: ${counter}`);
}

function serveReset(req, res) {
    counter = 0;
    res.write("Счетчик сброшен");
}

function serveNotFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write("Not found");
}
*/
