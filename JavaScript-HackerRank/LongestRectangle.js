function largestRectangle(h) {
  const stack = [];
  let maxArea = 0;
  let index = 0;

  while (index < h.length) {
    if (stack.length === 0 || h[index] >= h[stack[stack.length - 1]]) {
      stack.push(index++);
    } else {
      const top = stack.pop();
      const width =
        stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
      const area = h[top] * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  while (stack.length > 0) {
    const top = stack.pop();
    const width =
      stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
    const area = h[top] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
