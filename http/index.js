const http = require("http")

http
  .createServer(function(req, res) {
    res.writeHead(500)
    res.end("hello")
  })
  .listen(8080)
