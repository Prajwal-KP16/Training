function funnyString(s) {
  // Write your code here
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let leftDiff = Math.abs(
      alpha.indexOf(s[left]) - alpha.indexOf(s[left + 1])
    );
    let rightDiff = Math.abs(
      alpha.indexOf(s[right]) - alpha.indexOf(s[right - 1])
    );
    if (leftDiff !== rightDiff) {
      return "Not Funny";
    }
    left++;
    right--;
  }
  return "Funny";
}
