const http = require("http");
const fs=require("fs")
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>server created</title></head>");
    res.write("<h3><h1>welcome to home page</h1>");
    res.write("</h3>enter your details</h3>");
    res.write("<form action='/about' method='POST'>");
    res.write("<label for='name'>Name :</label>");
    res.write("<input type='text' name='name' id='name' palceholder='enter your name'/>");
    res.write("<label for='gender'>Gender :</label>");
    res.write("Male :<input type='radio' name='gender' id='male' />")
    res.write("Female :<input type='radio' name='gender' id='female' />")
    res.write("<button type='submit'>Submit</button>")
    res.write("</label>");
    res.write("</body>");
    res.write("</head>");
    return res.end();
  }else if(req.url.toLowerCase()==='/about' && req.method=="POST"){
    fs.writeFileSync("data.text","detaile enter success fully")
    res.statusCode=302;
    res.setHeader("Location","/")
    return res.end()

  }
  else if (req.url==='/about') {
    res.setHeader("Content-Type",'text/html')
    res.write("<html>")
    res.write("<head><title>server created</title></head>")
    res.write("<body><h1>welcome to about page</h1></body>")
    res.write("</head>")
   return res.end()
    
   }
});
server.listen(5000, () => {
  console.log("server is start successfully");
});
