function twoStacks(maxSum, a, b) {
  // Write your code here
  let sum = 0;
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < a.length && sum + a[i] <= maxSum) {
    sum += a[i];
    i++;
  }
  count = i;
  while (j < b.length && i >= 0) {
    sum += b[j];
    j++;
    while (sum > maxSum && i > 0) {
      i--;
      sum -= a[i];
    }
    if (sum <= maxSum) {
      count = Math.max(count, i + j);
    }
  }
  return count;
}
