function comp(array1, array2){
  if (array1 === null || array2 === null) {
    return false
  }

  let x = array1.sort((a,b) => a - b)
  let y = array2.sort((a,b) => a - b)

  for (let i = 0; i < y.length; i++) {
    if (x[i]**2 != y[i]){
      return false
    }
  }

  return true
}
