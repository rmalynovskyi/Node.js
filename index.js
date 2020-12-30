const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const ProductService = require('./ProductService.js');
const queryString = require('query-string');

function handler(req, res) {
    try {
        const parsedURL = URL.parse(req.url);
        if (parsedURL.pathname.indexOf("/api/products") === 0) {
            serveAPI(req, res, parsedURL);
            return;
        }

        if (parsedURL.pathname.indexOf("/product/") === 0) {
            //   serveProduct(req, res, "product.html");
            serveSPA(req, res);
            return;
        }

        switch (parsedURL.pathname) {
            case "/":
                // serveIndex(req, res, "index.html");
                serveSPA(req, res, "spa.html");
                break;
          /*  case "/111":
                serveSPA(req, res, "spa.html");
                break;*/
            case "/bundle.js":
                serveSPA(req, res, "public/bundle.js");
                break;
            case "/static/main.css":
                serveStatic(req, res, "main.css");
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
            default:
                serveNotFound(req, res);
                break;
        }
    }
    catch (err) {
        console.error(err);
    }
    console.log("Request, url:", req.url);

}

function serveAPI(req, res, str) {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf8' });
    if (str.search != null) {
        const parsed = queryString.parse(str.search);
        const products = ProductService.getProducts(parsed);
        products.then(function(products) {
            res.write(JSON.stringify(products));
            res.end();
        });
        return;
    }
    const array = str.pathname.split("/");
    if (array.length === 3 || array.length === 4 && array[3] === "") {
        const products = ProductService.getProducts();
        products.then(function(products) {
            setTimeout(function() {
                res.write(JSON.stringify(products));
                res.end();
            }, 2000);
        });
    }
    else if (array.length === 4 && array[3].match(/^[0-9a-fA-F]{24}$/)) {
        const product = ProductService.findById(array[3]);
        product.then(function(product) {
            if (product != null) {
                res.write(JSON.stringify(product));
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf8' });
                res.write("Not found");
            }
            res.end();
        });
    }
    else {
        ProductService.findById(array[3]).catch(function(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
            res.write(err.message);
            res.end();
        });
    }
}


function serveSPA(req, res, customFileName) {
    const fileName = setHeaderForFile(req, res, customFileName);
    const readable = fs.createReadStream(fileName);
    readable.pipe(res);
}

function serveStatic(req, res, customFileName) {
    const filename = setHeaderForFile(req, res, customFileName);
    const readable = fs.createReadStream('public/' + filename);
    readable.pipe(res);
}

function serveIndex(req, res, customFileName) {
    const filename = setHeaderForFile(req, res, customFileName);
    const template = ejs.compile(fs.readFileSync(filename).toString());
    const products = ProductService.getProducts();

    products.then(function(products) {
        const scope = {
            products: products
        };
        const content = template(scope);
        res.write(content);
        res.end();
    });
}

function serveProduct(req, res, customFileName) {
    const filename = setHeaderForFile(req, res, customFileName);
    const template = ejs.compile(fs.readFileSync(filename).toString());
    const url = URL.parse(req.url);
    const slugPart = url.pathname.replace("/product/", "");
    const slugParts = slugPart.split("-");
    const key = slugParts[0];
    const slug = slugPart.slice(key.length + 1);
    const desiredProduct = ProductService.getProductByKey(key);

    desiredProduct.then(function(product) {
            if (product != null) {
                if (slug != product.slug) {
                    const urlRedirect = `/product/${product.key}-${product.slug}`;
                    res.writeHead(301, { 'Location': urlRedirect });
                }
                const scope = {
                    product: product
                };
                const content = template(scope);
                res.write(content);
                res.end();
            }
            else {
                serveNotFound(req, res, "Введенный вами товар не найден");
            }
        })
        .catch(function(err) {
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf8' });
            res.write(err.message);
            res.end();
        });
}

function serveNotFound(req, res, customText) {
    const fileName = setHeaderForFile(req, res, "notFound.html");
    const text = customText ? customText : "Введенная вами страница на сайте не обнаружена.";
    const template = ejs.compile(fs.readFileSync(fileName).toString());
    const scope = {
        text: text
    };
    const content = template(scope);
    res.write(content);
    res.end();
}

function setHeaderForFile(req, res, customFileName) {
    const filename = customFileName ? customFileName : path.basename(req.url);
    const extension = path.extname(filename);
    switch (extension) {
        case '.html':
            if (filename === "notFound.html") {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf8' });
                break;
            }
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
