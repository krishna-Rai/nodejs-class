const EventEmitter = require('events')

const myEmitter = new EventEmitter()
let i=0;

myEmitter.once('phonering',()=>{
    console.log(++i)
    console.log("Phone is ringing")
})

myEmitter.emit('phonering')
myEmitter.emit('phonering')
myEmitter.emit('phonering')
myEmitter.emit('phonering')


// myEmitter.on('signup',()=>{
//     console.log("Singup has completed")
//     myEmitter.emit('login')
// })
// myEmitter.on('login',()=>{
//     console.log("Login has been completed")
//     myEmitter.emit('placeOrder')
// })

// myEmitter.on('placeOrder',()=>{
//     console.log("Order has been placed successfully")
// })

// myEmitter.emit('signup')


