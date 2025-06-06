function main() {
  const n = parseInt(readLine().trim(), 10);
  let m = n,
    max = 0,
    count = 0;
  let arr = [];
  while (m > 0) {
    let rem = m % 2;
    m = Math.floor(m / 2);
    arr.push(rem);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  console.log(max);
}
