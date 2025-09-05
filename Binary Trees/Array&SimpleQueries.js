function processData(input) {
  //Enter your code here
  const lines = input.trim().split("\n");

  let [n, q] = lines[0].split(" ").map(Number);
  let arr = lines[1].split(" ").map(Number);
  for (let k = 2; k < 2 + q; k++) {
    let [type, i, j] = lines[k].split(" ").map(Number);
    i = i - 1;
    j = j - 1;

    let subArr = arr.slice(i, j + 1);
    arr.splice(i, subArr.length);

    if (type === 1) {
      arr = [...subArr, ...arr];
    } else {
      arr = [...arr, ...subArr];
    }
  }
  let diff = Math.abs(arr[0] - arr[arr.length - 1]);

  console.log(diff);
  console.log(arr.join(" "));
}
