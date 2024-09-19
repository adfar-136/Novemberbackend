var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/pgpnov").then(()=>[
    console.log("connected to database")
])
const student = new mongoose.Schema({
   name:String,
   age:Number,
   email:String
})

const Students = new mongoose.model("students",student)
const addData=()=>{
    // const student1 = new Students({
    //     name:"Rahul",
    //     age:20,
    //     email:"rahul@gmail.com"
    // })
    // student1.save()
    Students.create({
        name:"Rahul",
        age:20,
        email:"rahul@gmail.com"
    })
}
addData()