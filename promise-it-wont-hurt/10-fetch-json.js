var qhttp = require('q-io/http');

qhttp.read("http://localhost:1337").then(function(data){
	console.log(JSON.parse(data));
})