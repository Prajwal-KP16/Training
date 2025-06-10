// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const strtlen = str.charCodeAt(0);
  const endlen = str.charCodeAt(str.length - 1);

  for (let i = strtlen; i <= endlen; i++) {
    const letter = String.fromCharCode(i);
    if (!str.includes(letter)) {
      return letter;
    }
  }

  return undefined;
}

fearNotLetter("abce");
