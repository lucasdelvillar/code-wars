function isPangram(string){
  let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
  string.toLowerCase().split('').forEach(item => {
    if (alphabet.includes(item)) {
      alphabet.splice(alphabet.indexOf(item), 1)
    }
  })

  if (alphabet.length === 0) {
    return true
  }

  return false
}
