function steadyGene(gene) {
  const n = gene.length;
  const len = n / 4;
  const count = { A: 0, C: 0, G: 0, T: 0 };

  for (const c of gene) {
    count[c]++;
  }
  if (
    count["A"] === len &&
    count["C"] === len &&
    count["G"] === len &&
    count["T"] === len
  ) {
    return 0;
  }

  const ex = {};
  for (const key in count) {
    if (count[key] > len) {
      ex[key] = count[key] - len;
    }
  }

  let l = 0;
  let minLen = n;
  const windowCount = { A: 0, C: 0, G: 0, T: 0 };

  for (let r = 0; r < n; r++) {
    const c = gene[r];
    windowCount[c]++;

    let coversAll = true;
    for (const key in ex) {
      if (windowCount[key] < ex[key]) {
        coversAll = false;
        break;
      }
    }

    while (l <= r && coversAll) {
      minLen = Math.min(minLen, r - l + 1);
      const leftChar = gene[l];
      windowCount[leftChar]--;
      l++;
      coversAll = true;
      for (const key in ex) {
        if (windowCount[key] < ex[key]) {
          coversAll = false;
          break;
        }
      }
    }
  }

  return minLen;
}
