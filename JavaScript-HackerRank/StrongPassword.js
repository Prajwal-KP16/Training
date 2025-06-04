/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let count = 0;
  if (!/[A-Z]+/.test(password)) {
    count++;
  }
  if (!/[a-z]+/.test(password)) {
    count++;
  }
  if (!/[0-9]+/.test(password)) {
    count++;
  }
  if (!/[!@#$%^&*()-+]+/.test(password)) {
    count++;
  }
  if (password.length < 6 && 6 - password.length > count) {
    return 6 - password.length;
  }
  return count;
}
