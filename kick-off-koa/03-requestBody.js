var koa = require('koa');
var parse = require('co-body');

var app = koa();

app.use(function* (next) {
  if (this.path !== '/') {
    return yield next;
  }
  var data = yield parse(this);
  this.body = data.name.toUpperCase();
});

app.listen(process.argv[2]);