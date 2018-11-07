const http = require('http'),
      util = require('util'),
      log  = util.debuglog('app'),
      fs   = require('fs'),
      path = require('path');

var file;
http.createServer((req, res) => {
  log(req.headers);
  log('==========');
  file = path.join(__dirname,req.url);
  log(file);
  var read = fs.creatReadStream(file);
  read.on('error',(err)=>{
  	res.statusCode = 404;
  	res.end(err.message);
  	return;
  });
  read.pipe(res);
}).listen(8080);