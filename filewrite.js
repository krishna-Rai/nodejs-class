const fs = require('fs')
let content = "This is what will be written to the file\n"

// fs.writeFile('index.html',content, (err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("File written successfully")
// })

// fs.appendFile('index.html',content,(err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("File appended successfully")
// })
try{
    fs.writeFileSync('test.txt',content)
    console.log("file written synchronously")
} catch(err){
    console.error(err)
}
console.log("Hello ")