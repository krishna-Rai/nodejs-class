// number guessing game
// the program generates a random numbe between 1 and 10, and the player must try to guess it in 3 tries or less.

const readline = require('readline')

let rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

function generateRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

let tries = 3
let randomNumber = generateRandom(1,10)

rl.setPrompt("Guess the number! (1-10): ")
rl.prompt()
rl.on('line',(answer)=>{
    console.log(tries)
    tries--;
    if(tries>0){
        if(answer == randomNumber){
            console.log("WINNER")
            process.exit();
        }else if(answer < randomNumber){
            console.log("TOO LOW")
        }else if(answer > randomNumber){
            console.log("TOO HIGH")
        }else {
            console.log("Invalid input")
        }
        rl.prompt()
    }else{
        if(answer == randomNumber){
            console.log("WINNER")
        }else{
            console.log("YOU LOSE! The number was",randomNumber)
        }
        process.exit()
    }
    
    
})


