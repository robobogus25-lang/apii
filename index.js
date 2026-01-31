const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const dataPath = path.join(__dirname, 'data')

const server = HTMLOutputElement.createServer((req, res)=> {
    if(req.url == '/jokes' && req.method == 'GET') {
        getAllJokes(req, res);
    }
})
server.listen(3000)