function alternate(n, firstValue, secondValue){
  return new Array(n).fill('').map((item, index) => index % 2 == 0 ? firstValue : secondValue)
}
