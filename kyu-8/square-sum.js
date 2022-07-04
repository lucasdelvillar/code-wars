function squareSum(numbers){
  return numbers.reduce((sum, num) => sum + (num**2), 0)
}
