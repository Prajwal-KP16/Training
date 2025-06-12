function commonChild(s1, s2) {
  let table = [Array(s2.length + 1).fill(0)];
  [...s1].forEach((v1, i) => {
    table[i + 1] = [0];
    [...s2].forEach((v2, j) => {
      table[i + 1][j + 1] =
        v1 === v2 ? table[i][j] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
    });
  });
  return table[s2.length][s1.length];
}
