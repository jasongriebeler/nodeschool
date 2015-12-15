var http = require('http')
var url = require('url')


var server = http.createServer(function (request, response) {
	var requestUrl = url.parse(request.url, true);
	if(requestUrl.pathname == '/api/parsetime'){
		var datetime = new Date(requestUrl.query.iso);
		response.writeHead(200, {"Content-Type" : "application/json"});
		response.end(JSON.stringify({
			"hour" : datetime.getHours(),
			"minute" : datetime.getMinutes(),
			"second" : datetime.getSeconds()
		}));
	} else if(requestUrl.pathname == '/api/unixtime'){
		var datetime = new Date(requestUrl.query.iso);
		response.writeHead(200, {"Content-Type" : "application/json"});
		response.end(JSON.stringify({
			"unixtime" : datetime.getTime()
		}));
	} else {
		response.end("unsupported url: " + requestUrl.path);
	}
});
server.listen(process.argv[2])