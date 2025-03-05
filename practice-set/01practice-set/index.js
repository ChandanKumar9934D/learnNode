const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const PORT=3000;
// app.use((req,res,next)=>{
//     console.log('my first dummy midelware 01',req.url,req.method);
//     next()
    
// })
// app.use((req,res,next)=>{
//     console.log(`my second dummy midelware `,req.url,req.method);
//     next()
    
// })
// app.use((req,res,next)=>{
//     console.log(`my third dummy midelware `,req.url,req.method);
//     res.send("<h1>welcome to home page</h1>")
// })

app.get('/',(req,res)=>{
    res.send("<h1>welcome to home page</h1>")
    
})
app.get("/contact-us",(req,res)=>{
        res.send(`
            <form action='/contact-us' method="post">
            <input type='text' placeholder="enter your name"  name='name'  />
            <input type='email' placeholder='enter your email' name='email'  />
            <button>submit</button>
            </form>
            `)
})
app.use(bodyParser.urlencoded())
app.post('/contact-us',(req,res)=>{
    console.log(req.body);
    
    res.send('<h1>data is submited</h1>')
})
app.listen(PORT,()=>{
    console.log(`server start on http://localhost:${PORT}`);
    
})