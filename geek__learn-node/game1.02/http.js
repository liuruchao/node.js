const http = require("http")
const url = require("url")
const fs = require("fs")
const queryString = require("querystring")
const game = require("./game")

let playWon = 0
http
  .createServer(function(request, response) {
    const parseUrl = url.parse(request.url)
    if (parseUrl.pathname === "/favicon.ico") {
      response.writeHead(200)
      response.end()
      return
    }

    if (parseUrl.pathname === "/") {
      fs.createReadStream(__dirname + "/index.html").pipe(response)
    }

    // 游戏接口
    if (parseUrl.pathname === "/game") {
      const query = queryString.parse(parseUrl.query)
      const playerAction = query.action
      const gameResult = game(playerAction)
      if (playWon >= 3) {
        response.writeHead(500)
        response.end("不和你玩了")
      }
      response.writeHead(200)
      if (gameResult === 0) {
        response.end("平局")
      } else if (gameResult === -1) {
        response.end("你输了")
      } else {
        playWon++
        response.end("你赢了")
      }
    }
  })
  .listen(8080)
