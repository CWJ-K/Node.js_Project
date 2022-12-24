// different method to write callback function

const port = 3000
const http = require('http')
const httpStatus = require('http-status-codes')
const app = http.createServer();
const getJSONString = obj => {
    return JSON.stringify(obj, null, 10)
};


app.on('request', (req, res) =>{
    res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/html'        
    }); 
    let responseMessage = '<h1>This will show on the screen.<h1>';
    res.end(responseMessage)
    console.log(`req.method: ${req.method}`)
    console.log(`req.url: ${req.url}`)
    console.log(`req.headers: ${req.headers}`)
    console.log(`Method: ${getJSONString(req.method)}`)
});

app.listen(port);
console.log(`The server has started and is listening on port number`)
