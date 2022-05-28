function isAllPossibilities(x){
  return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}
