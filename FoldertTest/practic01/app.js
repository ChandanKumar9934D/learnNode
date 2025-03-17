const express=require("express")

const app=express()
const userRoute=require("./Routers/userHome")
const adminRoute=require("./Routers/admin")
// console.log(path.join(__dirname));


app.use(express.urlencoded())
app.use(userRoute)
app.use(adminRoute)

app.listen(3000,()=>{
    console.log('http://localhost:3000');
    
})