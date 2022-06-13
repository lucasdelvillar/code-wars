function isCoprime(x, y) {
  let gcd = function(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }

  return gcd(x,y) === 1
}
