// This module is all about how we can create a server by using http modul

const http = require('http');


// creating server
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write(' Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 31]));
        res.end();
    };
}
)


//listening server on a port   here port = 3000
server.listen(3000)

console.log('Listening on port 3000...'); // This is a normal line
