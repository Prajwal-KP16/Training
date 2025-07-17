function absolutePermutation(n, k) {
  // Write your code here
  const usedSet = new Set();
  const res = [];

  for (let i = 1; i <= n; i++) {
    let pos1 = i + k;
    let pos2 = i - k;

    if (pos2 >= 1 && !usedSet.has(pos2)) {
      res.push(pos2);
      usedSet.add(pos2);
    } else if (pos1 <= n && !usedSet.has(pos1)) {
      res.push(pos1);
      usedSet.add(pos1);
    } else {
      return [-1];
    }
  }
  return res;
}
