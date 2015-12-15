var express = require('express')
var fs = require('fs')

var app = express()

app.get("/books", function(req, res){
	fs.readFile(process.argv[3], function(data){
		books = JSON.parse(data);
	});
	res.end(books)
});

app.listen(process.argv[2]);