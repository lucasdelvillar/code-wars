function positiveSum(arr) {
  return arr
    .filter(num => num > 0)
    .reduce((sum, current) => sum + current,0)
}
