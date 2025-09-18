function powerSum(X, N, num = 1) {
  // Write your code here
  let pow = Math.pow(num, N);

  if (pow > X) return 0;
  if (pow === X) return 1;

  return powerSum(X - pow, N, num + 1) + powerSum(X, N, num + 1);
}
