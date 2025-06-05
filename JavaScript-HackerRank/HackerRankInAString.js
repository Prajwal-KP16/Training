function hackerrankInString(s) {
  // Write your code here
  const str = "hackerrank";
  let i = 0;
  for (let ch of s) {
    if (ch === str[i]) {
      i++;
    }
    if (i === str.length) break;
  }

  return i === str.length ? "YES" : "NO";
}
