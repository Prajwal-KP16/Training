// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  if (typeof bool === typeof true || typeof bool === typeof false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);
