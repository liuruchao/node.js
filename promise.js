// 三轮面试

{
  function interview(round) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("success")
        } else {
          let error = new Error("fail")
          error.round = round
          reject(error)
        }
      })
    })
  }

  const promise = interview(1)
    .then(() => {
      return interview(2)
    })
    .then(() => {
      return interview(3)
    })
    .then(() => {
      console.log("smile")
    })
    .catch(err => {
      console.log(`cry at ${err.round} round`)
    })
}

// 面试多家公司
{
  function interview(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("success")
        } else {
          let error = new Error("fail")
          error.name = name
          reject(error)
        }
      })
    })
  }

  Promise.all([interview("gekkbang"), interview("tencent")])
    .then(() => {
      console.log("两家公司都面试上了")
    })
    .catch(err => {
      console.log(`${err.name} 面试失败`)
    })
}
