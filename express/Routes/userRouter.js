var express = require("express")
var userRouter = express.Router()

userRouter.get("/contact",(req,res)=>{
    res.send("bio user response")
})
userRouter.get("/bio",(req,res)=>{
    res.send("bio user response")
})
userRouter.get("/details/:adhaar",(req,res)=>{
    res.send(` hello${req.params.adhaar}`)
})
userRouter.param("adhaar",(req,res,next,adhaar)=>{
    console.log(adhaar)
    next()
})
userRouter.get("/userDetails/:id",(req,res,next)=>{
    const userId = req.params.id;
    console.log(userId)
    next()
},(req,res,next)=>{
    res.send("hello adfar")
})
module.exports =userRouter