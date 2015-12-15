var express = require('express');
var jade = require('jade');
var path = require("path");

var app = express()

app.get("/home", function(request, response){
	response.render("02-index", {date : new Date().toDateString()});
});

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "jade");
app.listen(process.argv[2]);