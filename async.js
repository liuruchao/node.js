async function asyncFuc() {
  new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log("fd")
      resolve()
    }, 1000)
  })
  console.log("执行完了")
}

asyncFuc()
