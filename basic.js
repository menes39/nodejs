const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    // const url = req.url;
    // res.end(url);

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hellooo')

    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.)

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({id:1, name: 'BIL425'}));
})

server.listen(PORT, () => {
    console.log(`server running $(PORT)`);
})