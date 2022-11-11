const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is your name?\n",(answer)=>{
    console.log(`Hello ${answer}`)
    rl.close()
})

// Math.floor(Math.random() * (max - min + 1)) + min;