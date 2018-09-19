#!/use/bin/node

const log = console.log;
var buf1 = new Buffer(256);
buf1[0]=23;

log('buf1 length:',buf1.length);
log('\nbuf1 content:',buf1);

//循环
for(var i=0;i<buf1.length;i++)buf1[i]=i;
log('\nbuf1 content:',buf1);

//截取
var buf2 = buf1.slice(250,256);
log('\nbuf2 content:',buf2);

//在buf2中填充数据，buffer数据转化为JSON数据
buf2.fill(0);
log('\nbuf2 content:',buf2);
log('\nbuf2\'s JSON:',buf2.toJSON());
log('\nbuf2\'s JSON:',JSON.stringify(buf2));

//用数组初始化 buffer
var arr = ['a', 0xba, 0xdf, 0x00, 255, 10];
var buf3 = new Buffer(arr);
log('\nbuf3 content:', buf1.length, buf3);

//用字符串初始化 buffer
var buf4 = new Buffer('hello world', 'utf8');
log('\nbuf4 content:', buf4);
//log('\nbuf4 content:', buf4.length, buf4.toString());
//输出11 hello world

// buffer 数据复制
//buf4.copy(buf3, 0, 0, buf3.length);
//log('\nbuf3:', buf3.length, buf3.toString());

buf3.copy(buf4);
log('\nbuf4 content:',buf4);
