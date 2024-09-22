const express = require("express");
const mongoose = require("mongoose")
const userRouter = require("./routes/users")
const app = express();
app.use("/api/users",userRouter)
mongoose.connect("mongodb://localhost:27017/blogapp").then(()=>{
    console.log("Connected to MongoDB");
})
app.connect(3000,()=>{
    console.log("Server is running on port 3000");
})