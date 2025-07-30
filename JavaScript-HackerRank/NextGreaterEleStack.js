function nextGreater(arr) {
  const nge = [];
  const stack = [];
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length !== 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      nge[i] = -1;
    } else {
      nge[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return nge;
}

const arr = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6];
const result = nextGreater(arr);
console.log(result);
