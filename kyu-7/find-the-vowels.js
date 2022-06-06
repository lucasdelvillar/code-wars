function vowelIndices(word){
  let vowels = ['a','e','i','o','u', 'y']
  let wordArr = word.toLowerCase().split('')
  let index = []

  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < vowels.length; j++)
      if (vowels[j] === wordArr[i]) {
        index.push(i + 1)
      }
  }

  return index
}
