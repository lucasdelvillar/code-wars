var isSquare = function(n){
  if (n === 0) {
    return true;
  }
  return n % Math.sqrt(n) === 0;
}
