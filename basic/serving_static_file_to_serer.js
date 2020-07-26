 const http = require('http');
 const fs = require('fs');
 const server = http.createServer((req,res) =>{
    const readStream = fs.createReadStream('./static/image.jpg');
    res.writeHead(200,{'Content-type': 'image/jpg'});
    readStream.pipe(res);
 });
server.listen(3000);