const fs = require("fs")
const game = require("./game")
const express = require("express")
const app = express()
// 玩家胜利次数，如果超过3，则后续往该服务器的请求都返回500
var playerWinCount = 0
// 玩家的上一次游戏动作
var lastPlayerAction = null
// 玩家连续出同一个动作的次数
var sameCount = 0

app
  .get("/", function(req, res) {
    res.send(fs.readFileSync(__dirname + "/index.html", "utf-8"))
  })
  .get(
    "/game",
    function(req, res, next) {
      if (playerWinCount >= 3) {
        res.status(500)
        res.send("不和你玩了")
        return
      }
      // 通过next执行后续中间件
      next()

      if (res.playWon) {
        playerWinCount++
      }
    },
    function(req, res, next) {
      const query = req.query
      const playerAction = query.action
      if (!playerAction) {
        res.status(400)
        res.send()
        return
      }

      if (lastPlayerAction == playerAction) {
        sameCount++
        if (sameCount >= 3) {
          res.status(400)
          res.send("你作弊！我再也不玩了")
          sameCount = 9
          return
        }
      } else {
        sameCount = 0
      }
      lastPlayerAction = playerAction

      // 把用户操作挂在res上传递给下一个中间件
      res.playerAction = playerAction
      next()
    },
    function(req, res) {
      const playerAction = res.playerAction
      const gameResult = game(playerAction)
      res.playWon = false
      res.status(200)
      if (gameResult === 0) {
        res.send("平局")
      } else if (gameResult === -1) {
        res.send("你输了")
      } else {
        res.send("你赢了")
        res.playWon = true
      }
    }
  )
  .listen(8080)
