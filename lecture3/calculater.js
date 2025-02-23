const http=require("http")
const addition=require("./addition")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("<h1>welcom to home page</h1>")
        res.write("<a href='/calculator'>go to calculator page</a>")
        res.end()
    }else if(req.url==="/calculator"){
        res.write("<html>")
        res.write("<head><title>calcultor page</title></head>")
        res.write("<body>")
        res.write("<form action='/calculate-result' method='POST'>")
        res.write("<lable for='input1'>input 1</lable>")
        res.write("<input type='text' name='input1' id='input1' placeholder='enter the first value'/>")
        res.write("<lable for='input2'>input 2</lable>")
        res.write("<input type='text' name='input2' id='input2' placeholder='enter the second value'/>")
        res.write("<button type='submit'>Sum</button>")
        res.write("</form>")
        res.write("</body>")
        res.write("</html>")
        res.end()
    }else if(req.url.toLowerCase()==="/calculate-result" && req.method==="POST"){
        addition(req,res)
        res.end()
    }
})
server.listen(5000,()=>{
    console.log('server is start');
    
})

