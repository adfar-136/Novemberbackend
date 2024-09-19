var fs = require("fs")
// fs.writeFile("adfar.txt","hello print",(err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log("done created")
//     }
// })
// fs.appendFile("adfar.txt","yuu",()=>{
//     console.log("appended successfully")
// })
fs.readFile("adfayr.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
    }
})