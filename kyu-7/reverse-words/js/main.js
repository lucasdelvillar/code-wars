function reverseWords(str) {
  // Go for it

  // separate words by spaces im array
  let words = str.split(" ")
  let reverseWords = words.map(item => item.split("").reverse().join(""))
  return reverseWords.join(" ")
}
