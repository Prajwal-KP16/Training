function trapRainwater(arr) {
  const n = arr.length;
  const prefix = [];
  prefix[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = Math.max(prefix[i - 1], arr[i]);
  }

  const suffix = [];
  suffix[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = Math.max(suffix[i + 1], arr[i]);
  }

  let total = 0;
  for (let i = 0; i < n; i++) {
    let leftmax = prefix[i];
    let rightmax = suffix[i];
    if (arr[i] < leftmax && arr[i] < rightmax) {
      total += Math.min(leftmax, rightmax) - arr[i];
    }
  }

  return total;
}

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trapRainwater(arr);
console.log(result);
