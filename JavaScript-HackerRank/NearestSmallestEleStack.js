function nearestSmallest(arr) {
  const stack = [];
  const nse = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      nse[i] = -1;
    } else {
      nse[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return nse;
}

const arr = [4, 5, 2, 10, 8];
const result = nearestSmallest(arr);
console.log(result);
