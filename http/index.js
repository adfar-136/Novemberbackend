var http = require("http")
var fs = require("fs")
var path = require("path")

var server = http.createServer((req,res)=>{
  var filePath = path.join(__dirname,"kuchbhi", req.url === "/" ? "index.html" : req.url)
  const extname = path.extname(filePath);
  let contentType = 'text/html'
  const mimeTypes ={
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".jpeg":"image/jpeg",
    ".jpg":"image/jpeg",
  }
  contentType = mimeTypes[extname] 
  fs.readFile(filePath,(err,content)=>{
    if(err){
        if(err.code === 'ENOENT'){
            fs.readFile(path.join(__dirname,"kuchbhi","404.html"),(err,content)=>{
                res.writeHead(404,{'Content-Type':'text/html'})
                res.end(content,"utf-8")
            })
        } else{
            res.end("server error")
        }
    } else {
        res.writeHead(200,{'Content-Type':contentType})
        res.end(content,"utf-8")
    }
  })
})

server.listen(5000,()=>{
    console.log("server is running on port 5000")
})













// var server = http.createServer((req,res)=>{
//  var file = fs.readFileSync("./kuchbhi/index.html","utf-8")
//  console.log(file)
//    if(req.url === "/"){
//     res.end(file)
//    } else if(req.url === "/about"){
//     res.write("This is about page")
//     res.end()
//    } else if(req.url === "/contact"){
//      res.end("This is about coontact page")
//    } else {
//     res.end("hello")
//    }
// })
// server.listen(5000,()=>{
//     console.log("server is running on port 5000")
// })
// http.createServer((req,res)=>{
//      res.write("Hello Adfar");
//      res.end()
// }).listen(4000,()=>{
//     console.log("listening to server on port 4000")
// })