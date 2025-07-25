function simpleTextEditor(operations) {
  const output = [];
  const history = [];
  let current = "";

  for (let op of operations) {
    const parts = op.split(" ");
    const type = parts[0];

    if (type === "1") {
      // append
      history.push(current);
      current += parts[1];
    } else if (type === "2") {
      // delete
      history.push(current);
      const k = parseInt(parts[1]);
      current = current.slice(0, -k);
    } else if (type === "3") {
      // print
      const k = parseInt(parts[1]);
      output.push(current[k - 1]);
    } else if (type === "4") {
      // undo
      current = history.pop();
    }
  }

  return output;
}
