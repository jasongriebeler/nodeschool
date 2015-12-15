var http = require('http')

var url = process.argv[2]

http.get(url, function (response){
	var length = 0;
	var text = ""
	response.setEncoding("utf8")
	response.on("data", function(data){
		length = length + data.length
		text = text + data
	});

	response.on("end", function(data){
		console.log(length)
		console.log(text)		
	});
})