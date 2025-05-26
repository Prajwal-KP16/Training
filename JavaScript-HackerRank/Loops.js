/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  for (var i = 0; i < s.length; i++) {
    const vowels = "aeiou";

    if (vowels.includes(s[i])) {
      console.log(s[i]);
    }
  }

  for (var i = 0; i < s.length; i++) {
    const vowels = "aeiou";

    if (!vowels.includes(s[i])) {
      console.log(s[i]);
    }
  }
}
