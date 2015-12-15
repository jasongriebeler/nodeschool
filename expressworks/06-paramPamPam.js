var express = require('express')

var app = express()

app.put("/message/:id", function(request, response){
	var id = request.params.id
	var hashed = require('crypto')
	    .createHash('sha1')
	    .update(new Date().toDateString() + id)
	    .digest('hex');
	response.end(hashed)
});

app.listen(process.argv[2]);