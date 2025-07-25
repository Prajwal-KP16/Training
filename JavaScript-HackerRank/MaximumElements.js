function getMax(operations) {
  // Write your code here
  const mainStack = [];
  const maxStack = [];
  const result = [];

  for (let op of operations) {
    const [command, value] = op.split(" ");

    if (command === "1") {
      const val = parseInt(value);
      mainStack.push(val);
      if (maxStack.length === 0 || val >= maxStack[maxStack.length - 1]) {
        maxStack.push(val);
      } else {
        maxStack.push(maxStack[maxStack.length - 1]);
      }
    } else if (command === "2") {
      mainStack.pop();
      maxStack.pop();
    } else if (command === "3") {
      result.push(maxStack[maxStack.length - 1]);
    }
  }

  return result;
}
