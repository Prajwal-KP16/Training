// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  let s1 = arr[0].toLowerCase();
  let s2 = arr[1].toLowerCase();
  for (let i = 0; i < s2.length; i++) {
    if (!s1.includes(s2[i])) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
