let p = new Promise((resolve, reject) => {
  let a = 1 + 12

  if (a === 2) {
    resolve('Success')
  } else {
    reject('Error')
  }
}) 

p.then(message => {
  console.log(`This is ${message}`)
}).catch(err => {
  console.log(`That is ${err}`)
})