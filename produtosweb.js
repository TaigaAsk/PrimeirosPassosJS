var http = require('http');

var server = http.createServer(function(request,response){
	if(request.url == "/produtos"){
	response.end("<html><body><h1>Lista de Produtos<h1><body><html>")
	} else {
	response.end("<html><body><h1>Pagina Inicial<h1><body><html>")
	}
});
server.listen(3000);

console.log("Server está rodando");