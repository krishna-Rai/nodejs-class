// TCP - Transmission Control Protocol
// a trasport layer protocol
// it allows the server and client to communicate in a connection oriented and 
// reliable manner

const net = require('net')
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
    prompt: ""
})

const server = net.createServer()
const port = 3500

server.on("connection",function (socket) {
    console.log("Client connected from", socket.remoteAddress, socket.remotePort)
    socket.write("Hello from server")

    socket.on('data', function (data){
        console.log("Message from client:", data.toString())
    })

    rl.prompt();
    rl.on('line', (line)=>{
        socket.write(line)
        rl.prompt()
    })

    socket.on('close', function (err) {
        if(err){
            console.log("client dicsonnected due to error")
        } else {
            console.log("Client disconnected")
        }
    })

})

server.listen(port)

server.on("listening", function (){
    console.log("Server is listening on port", port)
})