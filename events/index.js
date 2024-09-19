var events = require("events")
var fs = require("fs")
var eventEmmiter = new events()
var fun1 = (x,y)=>{
    console.log("fun1")
    console.log(x,y)
}
var fun2 = (x)=>{
    console.log("fun2")
    console.log(x)

}
eventEmmiter.on("kuchbhi",fun1)
eventEmmiter.on("kuchbhi",fun2)
// eventEmmiter.on("myEvent",fun2)
eventEmmiter.emit("kuchbhi","hey","vey")
console.log(eventEmmiter.listeners("kuchbhi"))
console.log(eventEmmiter.listenerCount("kuchbhi"))
// eventEmmiter.emit("myEvent")

let readStream = fs.createReadStream("adfar.txt")
readStream.on("data",function(chunk){
    console.log(chunk.toString())
})