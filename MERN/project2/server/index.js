const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./routes/tasks")
app.use(express.json())
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/novembertodo").then(()=>{
    console.log("connected to database")
}) 
app.use(cors())
app.use("/tasks",router)  
app.listen(4000,()=>[
    console.log("server is running on port 4000")
])