// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let cluster = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.some((char) => char === str[i])) {
      break;
    } else {
      cluster += str[i];
    }
  }
  if (cluster === "") {
    return str + "way";
  } else {
    return str.slice(cluster.length) + cluster + "ay";
  }
}

translatePigLatin("schwartz");
