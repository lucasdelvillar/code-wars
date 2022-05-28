function alphabetPosition(text) {
  return text.toLowerCase()
             .split("")
             .filter(item => (/[a-zA-Z]/).test(item))
             .map(item => item.charCodeAt(0) - 96)
             .join(" ")
}
