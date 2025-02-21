// create a page that shows anavigation bar of myntra with the following links
// home
// men
// women
// kids
// cart

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>task 1 </title></head>");
    res.write("<body><h1>welcome to about page</h1></body>");
    res.write("</head>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> <a href='/home'>home</a></li>");
    res.write("<li> <a href='/men'>men</a></li>");
    res.write("<li> <a href='/women'>women</a></li>");
    res.write("<li> <a href='/kids'>kids</a></li>");
    res.write("<li> <a href='/cart'>cart</a></li>");
    res.write("</ul>");
    res.write("</body>");
    return res.end();
  } else if (req.url == "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>server created</title></head>");
    res.write(`<body><h1>welcome to ${req.url} page</h1></body>`);
    res.write("</head>");
    return res.end();
  
  } else if (req.url == "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>server created</title></head>");
    res.write(`<body><h1>welcome to ${req.url} page</h1></body>`);
    res.write("</head>");
    return res.end();
  }else if(req.url=="/women"){
    res.end(`<h1>welcome to Women page</h1>`)
  }
  else if(req.url=="/kids"){
    res.end(`<h1>welcome to Women page</h1>`)
  }
  else if(req.url=="/cart"){
    res.end(`<h1>welcome to Women page</h1>`)
  }
});

server.listen(5000,()=>{
    console.log('server start');
    
})