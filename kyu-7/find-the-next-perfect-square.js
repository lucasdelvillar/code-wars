function findNextSquare(sq) {
  return sq % Math.sqrt(sq) === 0 ? (Math.sqrt(sq) + 1)**2 : -1
}
