let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});

    // fs.createReadStream(process.argv[3]).pipe(res)
    res.write(fs.readFileSync(process.argv[3],"utf-8"))
});

server.listen(Number(process.argv[2]));