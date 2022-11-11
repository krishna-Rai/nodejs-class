// Reading files in node 
const fs = require('fs')

// async reading of file
// const processFile = (err,fileData)=>{
//     console.log(err,fileData)
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(fileData)
// }
// fs.readFile('inde.html','utf-8',processFile)

// console.log("Hello world")

//synchronous way of reading files

const data = fs.readFileSync('index.html','utf-8')
console.log(data)
console.log("Hello World")
