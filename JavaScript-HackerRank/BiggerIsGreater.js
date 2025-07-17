function biggerIsGreater(w) {
  // Write your code here
  let s = w.split("");
  let index = -1;
  let n = w.length;

  for (let i = n - 2; i >= 0; i--) {
    if (s[i] < s[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return "no answer";
  } else {
    for (let i = n - 1; i > index; i--) {
      if (s[i] > s[index]) {
        swap(index, i, s);
        break;
      }
    }
    reverse(index + 1, n - 1, s);
  }

  return s.join("");

  function swap(w1, w2, s) {
    let temp = s[w1];
    s[w1] = s[w2];
    s[w2] = temp;
  }

  function reverse(start, end, s) {
    while (start <= end) {
      swap(start, end, s);
      start++;
      end--;
    }
  }
}
