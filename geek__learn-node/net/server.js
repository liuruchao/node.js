const net = require("net")

const server = net.createServer(socket => {
  socket.on("data", function(buffer) {
    const lessonId = buffer.readInt16BE();
    data
    console.log(buffer, buffer.toString())
  })
})

server.listen(4000)
