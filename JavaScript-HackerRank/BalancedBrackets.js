function isBalanced(s) {
  // Write your code here
  const stack = [];
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== brackets[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}
