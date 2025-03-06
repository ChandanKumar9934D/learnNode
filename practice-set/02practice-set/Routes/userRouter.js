const express = require("express");
const userRouter = express.Router();
const path=require("path")
console.log('path');

const realPath=path.join(__dirname,"../","views","home.html")

userRouter.get("/", (req, res, next) => {
  res.sendFile(realPath)
});
module.exports=userRouter