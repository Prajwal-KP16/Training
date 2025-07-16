function squares(a, b) {
  // Write your code here
  // let count = 0;
  // for(let i = a; i<= b ; i++){
  //     let sqr = Math.sqrt(i);
  //     if(i%sqr === 0){
  //         count++;
  //     }
  // }
  // return count;

  const sqr1 = Math.ceil(Math.sqrt(a));
  const sqr2 = Math.floor(Math.sqrt(b));
  return sqr2 - sqr1 + 1;
}
