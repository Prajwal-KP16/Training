function isValid(s) {
  // Write your code here
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const values = Object.values(freq);
  const max = Math.max(...values);
  const min = Math.min(...values);

  const maxCount = values.filter((v) => v === max).length;
  const minCount = values.filter((v) => v === min).length;

  if (max === min) return "YES";
  if (
    (max - min === 1 && maxCount === 1) ||
    (min === 1 && minCount === 1 && values.length > 1)
  ) {
    return "YES";
  }

  return "NO";
}
