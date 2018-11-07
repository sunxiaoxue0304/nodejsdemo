#!/usr/bin/node

const Readable = require('stream').Readable;

var c = 'a'.charCodeAt(0);

var MyReadable = function() {
  Readable.call(this);
};

MyReadable.prototype = Readable.prototype;

MyReadable.prototype._read = function() {
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
};

//将Myreadable类的实例化对象接入到标准输出流
var rs = new MyReadable();
rs.pipe(process.stdout);