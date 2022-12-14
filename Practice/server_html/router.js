const httpStatus = require('http-status-codes');
const htmlContentType = {
    'Content-Type': 'text/html'
};
const routes = {
    GET: {
        '/info': (req, res) => {
            res.writeHead(httpStatus.OK, {
                'Content-Type': 'text/plain'
            })
            res.end('Welcome to the Info Page!')
        }
    },
    POST: {}
};

// create a function called handle
exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end('<h1>No such file exists</h1>');
        }
    } catch (ex) {
        console.log('error' + ex);
    }
};

// 將 Main 的其他 route 設定，更新到 routes。最後由 handle 做引導
exports.get = (url, action) => {
    routes['GET'][url] = action;
};

exports.post = (url, action) => {
    routes['POST'][url] = action;
};