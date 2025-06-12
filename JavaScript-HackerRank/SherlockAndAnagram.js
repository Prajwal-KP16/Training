function sherlockAndAnagrams(s) {
  let result = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      result.push(s.slice(i, j).split("").sort().join(""));
    }
  }
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] == result[j]) count++;
    }
  }
  return count;
}
