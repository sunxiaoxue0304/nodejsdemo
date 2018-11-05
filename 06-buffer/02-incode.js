#!/usr/bin/node


const name = process.argv[2],
      pwd = process.argv[3];

var str = name + ':' + pwd;
var buf = new Buffer(str,'utf8');

if(process.argv.length !== 4){
  console.error('命令行格式：cmd username password');
  process.exit(1);
}

console.log('username:%s\npassword:%s',name,pwd);

console.log("base64 str:",buf.toString('base64'));
