function processData(input) {
  //Enter your code here
  let s = input.split("\n").splice(1);
  s.forEach((val) => {
    let even = [];
    let odd = [];
    for (let i = 0; i < val.length; i += 2) {
      even.push(val[i]);
    }
    for (let i = 1; i < val.length; i += 2) {
      odd.push(val[i]);
    }
    console.log(even.join("") + " " + odd.join(""));
  });
}
