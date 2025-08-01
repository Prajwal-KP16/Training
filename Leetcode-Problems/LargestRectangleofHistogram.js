function largestRectangle(h) {
  // Write your code here
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
