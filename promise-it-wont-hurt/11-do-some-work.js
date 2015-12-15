var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000").then(function (data){
	return data.toString();
}).then(function(id){
	qhttp.read("http://localhost:7001/" + id).then(function(data){
		console.log(JSON.parse(data));
	});
}).done();