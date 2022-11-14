// process object is a global that allows us to control the current process

//beforeExit

// process.on('beforeExit', (code)=>{
//     console.log("Process before Exit event with code:",code)
// })

//exit - this event is fired when either process.exit is called or event loop is empty
// exit event code is executed synchronously

// process.on('exit',(code)=>{
//     setTimeout(()=>{
//         console.log('This will not work')
//     },1000)
//     console.log("Process exit event with code:", code)
// })

// process.exit()

// uncaughtException - 

process.on('uncaughtException', (err,origin)=>{
    console.error("this caused a problem", origin)
    console.error(err.stack)
})

setTimeout(() => {
    console.log('Will this work')
}, 1000);

console.log("This will work")
thisDoesNotExist()
console.log("This will not work")