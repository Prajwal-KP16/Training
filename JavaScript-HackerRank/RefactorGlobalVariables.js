// Refactor Global Variables Out of Functions
// So far, we have seen two distinct principles for functional programming:

// Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

// Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

// Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(books, bookName) {
  let newBook = [...books];
  newBook.push(bookName);
  return newBook;

  // Change code above this line
}

// Change code below this line
function remove(books, bookName) {
  let newBook = [...books];
  const book_index = newBook.indexOf(bookName);
  if (book_index >= 0) {
    newBook.splice(book_index, 1);
    return newBook;

    // Change code above this line
  }
}
