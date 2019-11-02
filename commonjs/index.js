// rock 石头 scissor 剪刀 paper 布
let playerAction = process.argv[process.argv.length - 1]

const game = require("./game")
let winCount = 0
process.stdin.on("data", buffer => {
  const action = buffer.toString().trim()
  const result = game(action)
  if (result === 1) {
    winCount++
    if (winCount === 3) {
      console.log("你太厉害了")
      process.exit()
    }
  }
})
