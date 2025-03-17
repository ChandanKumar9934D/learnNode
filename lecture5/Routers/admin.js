const express=require("express")
const adminRoute=express.Router()
const path=require('path')

adminRoute.get("/addHome",(req,res)=>{
        res.sendFile(path.join(__dirname,'../',"views","addHome.html"))
    
})
adminRoute.post("/addHome",(req,res)=>{

    console.log(req.body);
    res.send('home add success fully')
    
})
module.exports=adminRoute