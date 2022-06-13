function sort(initialArray, sortingArray) {
  let arr = new Array(initialArray.length).fill('')     // create an array of length n and fills it
  initialArray.forEach((item, index) => {
    arr.splice(sortingArray[index], 1, item)            // removes element from index and replaces it
  })
  return arr
}
