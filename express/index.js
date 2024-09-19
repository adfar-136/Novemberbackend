var express = require("express")
var app = express()
var userRouter = require("./Routes/userRouter")
const adminRouter = require("./Routes/adminRouter")
app.get("/contact",(req,res)=>{
   res.send("home")
})
app.use("/user",userRouter)
app.use("/admin",adminRouter)
// const adminRouter = express.Router()
// const userRouter = express.Router()
// adminRouter.get("/dashboard",(req,res)=>{
//     res.send("dashboard response")
// })
// adminRouter.get("/overview",(req,res)=>{
//     res.send("overview response")
// })
// userRouter.get("/contact",(req,res)=>{
//     res.send("contact response")
// })
// userRouter.get("/bio",(req,res)=>{
//     res.send("bio response")
// })
// app.use("/admin",adminRouter)
// app.get("/admin/dashboard",(req,res)=>{
//     res.send("dashboard")
// })
// app.get("/admin/overview",(req,res)=>{
//     res.send("overview")
// })
// app.get("/user/contact",(req,res)=>{
//     res.send("user contact")
// })
// app.get("/user/bio",(req,res)=>{
//     res.send("user bio")
// })
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})