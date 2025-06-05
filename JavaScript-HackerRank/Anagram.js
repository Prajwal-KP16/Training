function anagram(s) {
  // Write your code here
  if (s.length % 2 !== 0) {
    return -1;
  }

  let mid = s.length / 2;
  let s1 = s.slice(0, mid);
  let s2 = s.slice(mid);

  let freq1 = {};
  let freq2 = {};
  for (let ch of s1) {
    freq1[ch] = (freq1[ch] || 0) + 1;
  }

  for (let ch of s2) {
    freq2[ch] = (freq2[ch] || 0) + 1;
  }

  let changes = 0;
  for (let ch in freq1) {
    let extra = freq1[ch] - (freq2[ch] || 0);
    if (extra > 0) {
      changes += extra;
    }
  }
  return changes;
}
