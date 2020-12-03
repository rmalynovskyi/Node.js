const http = require('http');
const URL = require('url');
let counter = 0;

function handler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const parsedURL = URL.parse(req.url);
    switch (parsedURL.pathname) {
        case "/":
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write("Main page<br>");
            res.write("<a href='/counter'>Счетчик<br></a>");
            res.write("<a href='/reset'>Сброс</a>");
            serveIndex(req, res);
            break;
        case "/counter":
            serveCounter(req, res);
            break;
        case "/reset":
            serveReset(req, res);
            break;
        default:
            serveNotFound(req, res);
            break;
    }
    console.log("Request, url:", req.url);
    res.end();
}

function serveIndex(req, res) {
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
    res.write("Not found");
}

const server = http.createServer(handler);
server.listen(process.env.PORT);
