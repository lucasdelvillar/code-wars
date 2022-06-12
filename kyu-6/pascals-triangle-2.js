function pascal(depth) {
  let arr = []                              // used to return nested array

  for (let i = 0; i < depth; i++) {
  let temp = []
    for (let j = 0; j <= i; j++) {          // j <= i, since number of items in a row is dependent on length of nth row
     if (j === 0) {                         // first index must always be 1
       temp.push(1)
     } else if (j === i) {                  // last index must alwasy be 1
       temp.push(1)
     } else {                               // sums two numbers above an item
       let prev = arr[i - 1]                // get previous row
       let nextItem = prev[j - 1] + prev[j] // j-1, and j are the positions of the two numbers above the current item
       temp.push(nextItem)
     }
    }
    arr.push(temp)
  }
  return arr
} 
