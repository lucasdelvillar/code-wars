function evenNumbers(array, number) {
  let temp = array.filter(item => item % 2 === 0)
  return temp.reverse().splice(0, number).reverse()
}
