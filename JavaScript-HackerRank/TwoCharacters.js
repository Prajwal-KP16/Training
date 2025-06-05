function alternate(s) {
  let alternative = [];
  for (let i = 0; i < s.length; i++) {
    if (!alternative.includes(s[i])) {
      alternative.push(s[i]);
    }
  }
  let max = 0;
  for (let i = 0; i < alternative.length; i++) {
    for (let j = i + 1; j < alternative.length; j++) {
      let a = alternative[i],
        b = alternative[j];

      let char = "",
        length = 0,
        flag = true;
      for (let ch of s) {
        if (ch === a || ch === b) {
          if (ch === char) {
            flag = false;
            break;
          }
          char = ch;
          length++;
        }
      }
      if (flag) {
        max = Math.max(max, length);
      }
    }
  }
  return max;
}
