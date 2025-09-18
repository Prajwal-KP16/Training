function stoneDivision(n, s) {
  // Write your code here
  s.sort((a, b) => a - b);
  const memo = {};

  function solve(pile) {
    if (memo[pile] !== undefined) return memo[pile];
    let ans = 0;
    for (let v of s) {
      if (v < pile && pile % v === 0) {
        const res = 1 + (pile / v) * solve(v);
        ans = Math.max(ans, res);
      }
    }
    memo[pile] = ans;
    return ans;
  }
  return solve(n);
}
