function isNarcissistic(n) {
  let numArr = n.toString().split("").map(item => Number(item))
  let sum = numArr.reduce((sum, item) => sum + item**n.toString().length, 0)

  return sum === n
}  
