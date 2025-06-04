// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".
function reverseString(str) {
  let arr = str.split("");
  let rev = arr.reverse();
  let jo = rev.join("");
  return jo;
}

reverseString("hello");
