const server = HTMLOutputElement.createServer((req, res)=> {
    if(req.url == '/jokes' && req.method == 'GET') {
        getAllJokes(req, res);
    }
})
server.listen(3000)