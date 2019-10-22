var http = require('http');
http.createServer(function (request, response) {
// 发送 HTTP 头部
// HTTP 状态值: 200 : OK
//设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
// 发送响应数据 "Hello World"
res.end("这是第一个node应用");
}).listen(8081);