function stockList(listOfArt, listOfCat){
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return ''
  }

  let obj = {}

  listOfCat.forEach(item => {
    obj[item] = 0
  })

  // count the number of books in a category
  listOfArt.forEach(item => {
    if (item[0] in obj) {
      arr = item.split(' ')
      let num = parseInt(arr[1])
      obj[item[0]] += num
    }
  })

  console.log(obj)
  return formatString(obj).join(' - ')
}

// formats string
function formatString(aObj) {
  let stringArr = []
  Object.entries(aObj).forEach(item => {
    stringArr.push(`(${item[0]} : ${item[1]})`)
  })
  console.log(stringArr)
  return stringArr
}
