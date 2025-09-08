function processData(input) {
  //Enter your code here
  let lines = input.trim().split("\n");
  let Q = parseInt(lines[0], 10);
  let heap = new Set();

  for (let i = 1; i <= Q; i++) {
    let parts = lines[i].split(" ").map(Number);

    if (parts[0] === 1) {
      heap.add(parts[1]);
    } else if (parts[0] === 2) {
      heap.delete(parts[1]);
    } else if (parts[0] === 3) {
      console.log(Math.min(...heap));
    }
  }
}
