const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, ({'Content-Type' : 'application/json'}));
    res.end('Hi I am from USA');
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log('Sever is running');
})

