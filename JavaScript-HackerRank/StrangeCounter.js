function strangeCounter(t) {
  // Write your code here
  let initial = 3;
  while (t > initial) {
    t -= initial;
    initial *= 2;
  }
  return initial - t + 1;
}
