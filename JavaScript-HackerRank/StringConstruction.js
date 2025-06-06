function stringConstruction(s) {
  // Write your code here
  let str = s.split("");
  let set1 = new Set(str);
  return set1.size;
}
