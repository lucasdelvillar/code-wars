function rot13(message){
  return message
    .split('')
    .map(item => {
      if ((/[a-mA-M]/).test(item)) {
        return String.fromCharCode(item.charCodeAt(0) + 13)
      } else if ((/[n-zN-Z]/).test(item)){
        return String.fromCharCode(item.charCodeAt(0) - 13)
      } else {
        return item
      }
    })
    .join('')

}
