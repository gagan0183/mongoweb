/**
 * Created by Gagan on 31-01-2017.
 */
var http = require('http');

http.createServer(function (req, res) {
   res.writeHead(200, {
       'Content-Type': 'text/plain'
   });
    res.write('hello world');
    res.end();
}).listen(9000);