const fs = require('fs')
fs.stat('index.html',(err,stats)=>{
    if(err){
        return console.log(err)
    }
    console.log(stats)
})