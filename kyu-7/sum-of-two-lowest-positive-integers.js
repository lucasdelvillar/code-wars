function sumTwoSmallestNumbers(numbers) {
  let x = Math.min(...numbers)
  numbers.splice(numbers.indexOf(x), 1)
  let y = Math.min(...numbers)

  return x + y
}

//next time sort the array first
