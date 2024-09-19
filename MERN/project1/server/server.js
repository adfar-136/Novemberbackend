const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express() 
const bcrypt = require("bcrypt")

const User = require("./models/User")
mongoose.connect("mongodb://localhost:27017/novemberproject1").then(()=>{
    console.log("connected to database")
})
app.use(express.json())
app.use(cors())
app.post("/register",async (req,res)=>{
    const {username,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User({
        username:username,
        email:email,
        password:hashedPassword
    })
    
   await newUser.save()
   res.json("user created")
})
app.post("/login",async(req,res)=>{
       let {email,password} = req.body;
       const user = await User.findOne({email:email})
       if(!user){
        return res.json("user not found")
       }
       const isMatch =await bcrypt.compare(password,user.password)
       if(!isMatch){
        return res.json("password is incorrect")
       }
       return res.json({message:"user logged in succefully",user:user.email});
})
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})