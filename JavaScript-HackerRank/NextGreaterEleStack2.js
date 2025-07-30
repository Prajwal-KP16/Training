function nextGreater2(arr) {
  const nge = [];
  const stack = [];
  const n = arr.length;

  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length !== 0 && stack[stack.length - 1] <= arr[i % n]) {
      stack.pop();
    }

    if (i < n) {
      nge[i] = stack.length !== 0 ? stack[stack.length - 1] : -1;
    }

    stack.push(arr[i % n]);
  }
  return nge;
}

const arr = [2, 10, 12, 1, 11];
const result = nextGreater2(arr);
console.log(result);
