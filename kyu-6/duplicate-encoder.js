function duplicateEncode(word){
  let obj = {}
  let arr = word.toLowerCase().split('')

  // iterate over array and track letters
  arr.forEach(chr => {
    if (obj[chr]) {
      obj[chr]++
    } else {
      obj[chr] = 1
    }
  })

  let str = ''
  // replace duplicates with '(' or ')'
  arr.forEach(chr => {
    if (obj[chr] > 1) {
      str += ')'
    } else {
      str += '('
    }
  })

  return str
}
