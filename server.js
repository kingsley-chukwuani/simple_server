const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Kingsley Chukwuani\n');
});

server.listen(8900, 'localhost', () => {
    console.log('Server running at http://localhost:8900/');
});