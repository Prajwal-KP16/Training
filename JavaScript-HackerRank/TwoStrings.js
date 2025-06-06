function twoStrings(s1, s2) {
  // Write your code here
  const set1 = new Set(s1);
  const set2 = new Set(s2);

  for (let c of set1) {
    if (set2.has(c)) {
      return "YES";
    }
  }
  return "NO";
}
