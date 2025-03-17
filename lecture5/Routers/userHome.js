const express=require("express")
const userRoute=express.Router()
const path=require('path')

userRoute.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../',"views","index.html"))
})

module.exports=userRoute