function dirReduc(arr){

  let NS = ['NORTH', 'SOUTH']
  let EW = ['EAST', 'WEST']

  if (arr.length === 0) {
    return []
  } else if (arr.length === 1) {
    return arr
  } else {
     for (let i = 1; i < arr.length; i++) {
       if (NS.includes(arr[i]) && NS.includes(arr[i-1]) && arr[i] != arr[i-1]) {
         arr.splice(i-1,2)
         return dirReduc(arr)
       } else if (EW.includes(arr[i]) && EW.includes(arr[i-1]) && arr[i] != arr[i-1]) {
         arr.splice(i-1,2)
         return dirReduc(arr)
       }
     }
  }

  return arr
