const express=require("express")
const app=express()
const path=require('path')
const adminRoute=require("./Routers/adminRoute")
const userRoute=require("./Routers/userRoute")
const PORT=3000
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,'public')))
app.set("view engine",'ejs')
app.set('Views','Views')
app.use(userRoute)
app.use('/admin',adminRoute)
app.listen(PORT,()=>{
    console.log('server start');
    
})