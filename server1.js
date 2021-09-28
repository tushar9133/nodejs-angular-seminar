var http=require("http");
var a=10;
var b=80;
var c=a+b;
var mymass="a value is:" + a + "b value is:" + b + "c value is:" + c ;
http.createServer(function(req,res){

	res.end("<h1>hello world in node js\n</h1>"+mymass);
}).listen(3000);
console.log("server running at http://127:0.0.1:3000");