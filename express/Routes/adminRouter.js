var express = require("express")
var adminRouter = express.Router()
adminRouter.get("/dashboard",(req,res)=>{
    res.send("Welcome to the dashboard")
})
adminRouter.get("/overview",(req,res)=>{
    res.send("Welcome to the overview")
})
module.exports = adminRouter