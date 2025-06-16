function superDigit(n, k) {
  // Write your code here
  const getSuperDigit = (num) => {
    if (num.length === 1) return parseInt(num);

    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += parseInt(num[i]);
    }
    return getSuperDigit(sum.toString());
  };
  let initialSum = 0;
  for (let digit of n) {
    initialSum += parseInt(digit);
  }
  initialSum *= k;
  return getSuperDigit(initialSum.toString());
}
