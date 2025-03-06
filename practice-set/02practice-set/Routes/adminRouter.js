const express=require("express")
const adminRouter=express.Router()

adminRouter.get('/add-home',(req,res)=>{
    res.send(`
        <form action='/admin/add-home' method="post">
            <input type="text" placeholder="enter the home name" name="homeName">
            <input type="submit">
        </form>
        `)
})
adminRouter.post("/add-home",(req,res)=>{
    console.log(req.body);
    res.send(`
        <h1>house register successfuly </h1>
        <a href="/">go back to home page</a>
        `)
    
})
module.exports=adminRouter