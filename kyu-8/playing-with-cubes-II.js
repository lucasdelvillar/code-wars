class Cube {
  constructor(side) {
    this.side = Math.abs(side) || 0
  }

  getSide() {
    return this.side
  }

  setSide(side) {
    this.side = Math.abs(side)
  }
}
