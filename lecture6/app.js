const express=require("express")
const adminRouter=require("./Routes/adminRouter")
const userRouter=require("./Routes/userRouter")
const app=express()
const PORT=3000


// app.get("/",(req,res)=>{
//     res.send("<h1>welcome to home page</h1>")
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>welcome to about page</h1>")
// })
// app.use(adminRouter)
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next()
    
})
app.use(express.urlencoded())
app.use(userRouter)
app.use('/admin',adminRouter)
app.get("/*",(req,res)=>{
    res.status(404).send(`<h1>page not found 404</h1>`)
})
app.listen(PORT,()=>{
    console.log(`server is start http://localhost:${PORT}`);
    
})