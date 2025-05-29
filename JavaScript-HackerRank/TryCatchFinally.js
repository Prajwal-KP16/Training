function reverseString(s) {
  try {
    let arr = s.split("");
    let rev = arr.reverse();
    let joined = rev.join("");
    console.log(joined);
  } catch (Exception) {
    console.log("s.split is not a function");
    console.log(s);
  }
}
