const net = require("net")

const socket = new net.Socket({})

socket.connect({
  host: "127.0.0.1",
  port: 4000
})

// let count = 0
// setInterval(() => {
//   count++
//   socket.write(`${count}:good morinint`)
// }, 1000)

// socket.write("good morining")
