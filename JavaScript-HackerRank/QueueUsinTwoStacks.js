function processData(input) {
  const lines = input.trim().split("\n");
  const q = parseInt(lines[0]);
  const newStack = [];
  const oldStack = [];
  const output = [];

  const shiftStacks = () => {
    if (oldStack.length === 0) {
      while (newStack.length > 0) {
        oldStack.push(newStack.pop());
      }
    }
  };

  for (let i = 1; i <= q; i++) {
    const [command, value] = lines[i].split(" ");

    if (command === "1") {
      newStack.push(Number(value));
    } else if (command === "2") {
      shiftStacks();
      oldStack.pop();
    } else if (command === "3") {
      shiftStacks();
      output.push(oldStack[oldStack.length - 1]);
    }
  }

  console.log(output.join("\n"));
}
