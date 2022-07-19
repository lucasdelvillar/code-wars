function digital_root(n) {
  if (n.toString().length === 1) {
    return n
  } else {
    //.map turns string into a number
    return digital_root(n.toString().split('').map(x => +x).reduce((acc,num) => acc + num, 0))
  }
}
