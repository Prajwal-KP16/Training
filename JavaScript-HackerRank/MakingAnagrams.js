function makingAnagrams(s1, s2) {
  // Write your code here
  let freq1 = {};
  let freq2 = {};
  for (let ch of s1) {
    freq1[ch] = (freq1[ch] || 0) + 1;
  }

  for (let ch of s2) {
    freq2[ch] = (freq2[ch] || 0) + 1;
  }

  let deletions = 0;
  for (let ch in freq1) {
    if (freq2[ch]) {
      deletions += Math.abs(freq1[ch] - freq2[ch]);
    } else {
      deletions += freq1[ch];
    }
  }

  for (let ch in freq2) {
    if (!freq1[ch]) {
      deletions += freq2[ch];
    }
  }

  return deletions;
}
