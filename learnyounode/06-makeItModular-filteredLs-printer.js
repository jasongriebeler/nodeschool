var mymodule = require("./06-makeItModular-filteredLs-module")

mymodule(process.argv[2], process.argv[3], function(errors, fileNames){
	fileNames.forEach(function(file){
		console.log(file)
	})
})