// rock 石头 scissor 剪刀 paper 布
let playerAction = process.argv[process.argv.length - 1]

if (
  playerAction !== "rock" &&
  playerAction !== "scissor" &&
  playerAction !== "paper"
) {
  console.log("请输入rock或paper或scissor")
} else {
  let computerAction = ""
  const randow = Math.random() * 3
  if (randow < 1) {
    computerAction = "rock"
    console.log("电脑出了石头")
  } else if (randow < 2) {
    computerAction = "scissor"
    console.log("电脑出了剪刀")
  } else {
    computerAction = "paper"
    console.log("电脑出了布")
  }
  if (playerAction === computerAction) {
    console.log("平局")
  } else {
    if (
      (playerAction === "rock" && computerAction === "scissor") ||
      (playerAction === "scissor" && computerAction === "paper") ||
      (playerAction === "paper" && computerAction === "rock")
    ) {
      console.log("你赢了")
    } else {
      console.log("你输了")
    }
  }
}
