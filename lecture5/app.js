const express=require("express")
const path=require("path")
const app=express()
const userRoute=require("./Routers/userHome")
const adminRoute=require("./Routers/admin")
// console.log(path.join(__dirname));


app.use(express.urlencoded())
app.use(userRoute)
app.use(adminRoute)
app.use(express.static(path.join(__dirname,'public')))

app.listen(3000,()=>{
    console.log('http://localhost:3000');
    
})