const { write } = require('fs');
var http = require ('http');

var sever = http.createServer(function(req,res){
    res.writeHead(200, {'content-Type':'text/plain'});
    res.end('welcome to BackEnd');
});

sever.listen(8081, '127.0.0.1');
console.log('Server started');