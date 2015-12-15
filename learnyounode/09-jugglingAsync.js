var http = require(‘http’)

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var urls = new Array(url1, url2, url3)

var responses = new Array()
var responsesReceived = 0;
for(var k = 0; k < urls.length; k++){
	var logData = function(url, index){
	http.get(url, function(response){
	response.setEncoding(“utf8”)
	var text = “”

	response.on(“data”, function(data){
	text = text + data;
 });

 response.on(“end”, function(data){
 	responsesReceived = responsesReceived + 1;
 	responses[index] = text;
 	if(responsesReceived == urls.length){
 		responses.forEach(function(line){
 			console.log(line)
 		})
 	}

 })
	});
 };
 logData(urls[k], k);
}