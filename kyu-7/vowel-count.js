function getCount(str) {
  let vowelsCount = 0;
  str.split('').forEach(item => ['a', 'e', 'i','o', 'u'].includes(item) ? vowelsCount++ : vowelsCount + 0 )
  return vowelsCount
}
