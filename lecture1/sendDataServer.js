const http=require("http")
const server=http.createServer((req,res)=>{
   if (req.url==='/') {
    res.setHeader("Content-Type",'text/html')
    res.write("<html>")
    res.write("<head><title>server created</title></head>")
    res.write("<body><h1>welcome to home page</h1></body>")
    res.write("</head>")
   return res.end()
    
   }else if (req.url==='/about') {
    res.setHeader("Content-Type",'text/html')
    res.write("<html>")
    res.write("<head><title>server created</title></head>")
    res.write("<body><h1>welcome to about page</h1></body>")
    res.write("</head>")
   return res.end()
    
   }
    res.setHeader("Content-Type",'text/html')
    res.write("<html>")
    res.write("<head><title>server created</title></head>")
    res.write("<body><h1>404 page not found</h1></body>")
    res.write("</head>")
   return res.end()
    


})
server.listen(5000,()=>{
    console.log('server is start successfully');
    
})