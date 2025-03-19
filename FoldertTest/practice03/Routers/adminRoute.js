const express=require('express')
const adminRoute=express.Router()
const {addhome}=require("../controller/homeControler")
const {addedhome}=require("../controller/homeControler")
const homes=[]
adminRoute.get('/addhome',addhome)
adminRoute.post('/addhome',addedhome)


module.exports=adminRoute