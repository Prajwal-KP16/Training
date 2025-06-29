function pickingNumbers(a) {
  // Write your code here
  a.sort((x, y) => x - y);
  let maxLen = 0;
  let l = 0;

  for (let r = 0; r < a.length; r++) {
    while (a[r] - a[l] > 1) {
      l++;
    }
    maxLen = Math.max(maxLen, r - l + 1);
  }

  return maxLen;
}
