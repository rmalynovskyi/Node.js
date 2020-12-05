const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const ProductService = require('./ProductService.js');

function handler(req, res) {
    try {
        const parsedURL = URL.parse(req.url);
        switch (parsedURL.pathname) {
            case "/":
                serveIndex(req, res, "index.html");
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
        console.error(err);
    }
    console.log("Request, url:", req.url);
}

function serveStatic(req, res, customFileName) {
    const filename = setHeaderForFile(req, res, customFileName);
    const readable = fs.createReadStream('static/' + filename);
    readable.pipe(res);
}

function serveIndex(req, res, customFileName) {
    const filename = setHeaderForFile(req, res, customFileName);
    const products = ProductService.getProducts();
    const template = ejs.compile(fs.readFileSync('static/' + filename).toString());
    const content = template(products[0]);
    res.write(content);
    res.end();
}

function setHeaderForFile(req, res, customFileName) {
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
    return filename;
}

const server = http.createServer(handler);
ProductService.init();
server.listen(process.env.PORT);
