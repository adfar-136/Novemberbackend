var path = require("path")

// console.log(path)
console.log(path.dirname("C:/Users/LEGION/Desktop/fsdNovember/Backend/path"))
console.log(path.basename("C:/Users/LEGION/Desktop/fsdNovember/Backend/path"))
console.log(path.extname("C:/Users/LEGION/Desktop/fsdNovember/Backend/path.html"))
var pathh ="/adfar/adfar.html"
var main = path.join(__dirname,pathh)
console.log(main)
console.log(path.parse("C:/Users/LEGION/Desktop/fsdNovember/Backend/path.txt"))
let pathhh = path.format({
    root: 'Cfvdvdfvdfd:/',
    dir: 'C:/Users/LEGION/Desktop/fsdNovember/Backend',
    base: 'path.txt',
    ext: '.txtyhtht',
    name: 'patyhythytth'
  })
  console.log(pathhh)