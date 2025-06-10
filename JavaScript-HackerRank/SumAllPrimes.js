function sumPrimes(num) {
  let prime = new Array(num + 1).fill(true);

  prime[0] = false;
  prime[1] = false;
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (prime[i]) {
      sum += i;
      for (let j = i * i; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }
  return sum;
}

sumPrimes(10);
