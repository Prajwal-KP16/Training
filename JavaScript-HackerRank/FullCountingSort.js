function countSort(arr) {
  // Write your code here
  let n = arr.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, parseInt(arr[i][0]));
  }

  let buckets = Array.from({ length: max + 1 }, () => []);
  for (let i = 0; i < n; i++) {
    let key = parseInt(arr[i][0]);
    let value = i < n / 2 ? "-" : arr[i][1];
    buckets[key].push(value);
  }

  let result = [];
  for (let bucket of buckets) {
    result.push(...bucket);
  }

  console.log(result.join(" "));
}
