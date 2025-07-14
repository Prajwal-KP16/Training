function matchingStrings(stringList, queries) {
  // Write your code here
  const freq = {};
  for (let s of stringList) {
    freq[s] = (freq[s] || 0) + 1;
  }
  const result = [];
  for (let q of queries) {
    result.push(freq[q] || 0);
  }
  return result;
}
