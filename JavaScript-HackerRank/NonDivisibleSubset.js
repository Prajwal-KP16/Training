function nonDivisibleSubset(k, s) {
  let rem = new Array(k).fill(0);
  for (let num of s) {
    rem[num % k]++;
  }

  let maxSize = 0;
  if (rem[0] > 0) {
    maxSize += 1;
  }

  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i !== k - i) {
      maxSize += Math.max(rem[i], rem[k - i]);
    } else {
      if (rem[i] > 0) {
        maxSize += 1;
      }
    }
  }
  return maxSize;
}
