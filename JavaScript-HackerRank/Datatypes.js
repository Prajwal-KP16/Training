function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  let firstInteger = 4;
  firstInteger += parseInt(secondInteger);

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  let firstDecimal = 4.0;
  firstDecimal += parseFloat(secondDecimal);

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  let firstString = "HackerRank ";
  firstString += secondString;

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
  console.log(firstInteger);

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
  console.log(firstDecimal);

  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
  console.log(firstString);
}
