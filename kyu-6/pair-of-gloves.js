function numberOfPairs(gloves) { //can't sort array
  let count = 0
  let obj = {}

  gloves.forEach(item => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })

  //array of values
  Object.values(obj).forEach(item => {
    count += Math.floor(item / 2)
  })

  return count
}
