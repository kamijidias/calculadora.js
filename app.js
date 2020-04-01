var http = require('http');

http.createServer(function (req, res) {
    res.end("Ola, Bem vindo ao meu web site");
}).listen(8081);

console.log("O servidor esta rodando!");