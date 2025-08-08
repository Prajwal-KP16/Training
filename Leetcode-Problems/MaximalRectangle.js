function largestRectangle(h) {
  const stack = [];
  const n = h.length;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && h[stack[stack.length - 1]] > h[i]) {
      let ele = stack[stack.length - 1];
      stack.pop();
      let nse = i;
      let pse = stack.length === 0 ? -1 : stack[stack.length - 1];
      maxArea = Math.max(maxArea, h[ele] * (nse - pse - 1));
    }
    stack.push(i);
  }

  while (stack.length !== 0) {
    let ele = stack[stack.length - 1];
    stack.pop();
    let nse = n;
    let pse = stack.length === 0 ? -1 : stack[stack.length - 1];
    maxArea = Math.max(maxArea, h[ele] * (nse - pse - 1));
  }

  return maxArea;
}

var maximalRectangle = function (matrix) {
  let n = matrix.length;
  if (n === 0) return 0;
  let m = matrix[0].length;

  let prefixsum = Array.from({ length: n }, () => Array(m).fill(0));

  for (let j = 0; j < m; j++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] === "0") {
        sum = 0;
      } else {
        sum += matrix[i][j] - "0"; // Convert '1'/'0' to number
      }
      prefixsum[i][j] = sum;
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, largestRectangle(prefixsum[i]));
  }
  return ans;
};
