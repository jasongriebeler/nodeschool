var http = require('http');
var through = require('through');

var toupper = function(chunk){
	this.queue(chunk.toString().toUpperCase());
}

var server = http.createServer(function(request, response){
	request.pipe(through(toupper)).pipe(response)
});

server.listen(process.argv[2])