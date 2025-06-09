function caesarCipher(s, k) {
  // Write your code here
  let result = "";
  k = k % 26;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let charCode = s.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let rotated = ((charCode - 65 + k) % 26) + 65;
      result += String.fromCharCode(rotated);
    } else if (charCode >= 97 && charCode <= 122) {
      let rotated = ((charCode - 97 + k) % 26) + 97;
      result += String.fromCharCode(rotated);
    } else {
      result += char;
    }
  }
  return result;
}
