function isHollow(x){

  while(x.length > 2 && x[0] !== 0 && x[x.length-1] !== 0){
    x.shift();
    x.pop();
  }

  return x.length > 2 && x.every(i => i === 0);
}
