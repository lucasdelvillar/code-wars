function isValidWalk(walk) {
  if (walk.length != 10) {
    return false
  }

  let n = walk.filter(item => (item === "n"))
  let s = walk.filter(item => (item === "s"))
  let e = walk.filter(item => (item === "e"))
  let w = walk.filter(item => (item === "w"))

  if ((n.length === s.length) && (e.length === w.length)) {
    return true
  }

}
