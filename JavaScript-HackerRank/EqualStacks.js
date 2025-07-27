function equalStacks(h1, h2, h3) {
  const getCumulativeHeights = (stack) => {
    let sum = 0;
    const result = [];
    for (let i = stack.length - 1; i >= 0; i--) {
      sum += stack[i];
      result.push(sum);
    }
    return result;
  };

  const s1 = new Set(getCumulativeHeights(h1));
  const s2 = new Set(getCumulativeHeights(h2));
  const s3 = getCumulativeHeights(h3);
  for (const height of s3) {
    if (s1.has(height) && s2.has(height)) {
      return height;
    }
  }

  return 0;
}
