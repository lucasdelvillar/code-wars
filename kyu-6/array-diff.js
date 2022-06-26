function arrayDiff(a, b) {
  let temp = []

  a.forEach(item => {
    if (!b.includes(item)) {
      temp.push(item)
    }
  })
  return temp
}
