var koa = require('koa');
var fs = require('fs');

var app = koa();

app.use(function* (next) {
  if(this.request.type == 'application/json')
    this.body = { 'message' : 'hi!'};
  else
    this.body = "ok"  
});

app.listen(process.argv[2]);