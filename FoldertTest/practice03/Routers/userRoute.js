const express=require("express")
const userRoute=express.Router()
const {home}=require("../controller/homeControler")
userRoute.get('/',home)
module.exports=userRoute