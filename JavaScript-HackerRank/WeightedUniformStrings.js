function weightedUniformStrings(s, queries) {
  // Write your code here
  let weight = new Set();
  let prev = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch === prev) {
      count++;
    } else {
      count = 1;
      prev = ch;
    }

    let charW = s.charCodeAt(i) - 96;
    let total = charW * count;

    weight.add(total);
  }

  return queries.map((q) => (weight.has(q) ? "Yes" : "No"));
}
