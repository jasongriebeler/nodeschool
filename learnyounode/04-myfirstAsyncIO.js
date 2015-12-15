var fs = require('fs')

fs.readFile(process.argv[2], "UTF-8", function(err, data){
	console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1)
})