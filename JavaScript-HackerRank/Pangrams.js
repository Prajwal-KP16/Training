function pangrams(s) {
  // Write your code here
  let seen = {};

  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch >= "a" && ch <= "z") {
      seen[ch] = true;
    }
  }

  let count = 0;
  for (let letter in seen) {
    count++;
  }
  return count === 26 ? "pangram" : "not pangram";
}
