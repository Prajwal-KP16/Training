function waiter(number, q) {
  const primes = getFirstQPrimes(q);
  let answers = [];
  let A = [...number].reverse();

  for (let i = 0; i < q; i++) {
    let B = [];
    let nextA = [];
    const prime = primes[i];
    while (A.length > 0) {
      const plate = A.pop();
      if (plate % prime === 0) {
        B.push(plate);
      } else {
        nextA.push(plate);
      }
    }
    while (B.length > 0) {
      answers.push(B.pop());
    }
    A = nextA;
  }
  while (A.length > 0) {
    answers.push(A.pop());
  }

  return answers;
}

function getFirstQPrimes(q) {
  const primes = [];
  let num = 2;
  while (primes.length < q) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
