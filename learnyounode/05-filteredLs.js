var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var extension = process.argv[3]

fs.readdir(dir, function(err, list){
	for(var k=0; k < list.length; k++){
		var fileExtension = path.extname(list[k]).substring(1)
		if(fileExtension == extension)
			console.log(list[k])
	}
})