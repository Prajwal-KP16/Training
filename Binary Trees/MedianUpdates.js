function processData(input) {
  //Enter your code here
  const lines = input.trim().split("\n");
  const n = parseInt(lines[0], 10);

  let arr = [];

  function binarySearch(x) {
    let lo = 0,
      hi = arr.length;
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (arr[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function printMedian() {
    if (arr.length === 0) {
      console.log("Wrong!");
      return;
    }

    let len = arr.length;
    if (len % 2 === 1) {
      console.log(arr[Math.floor(len / 2)]);
    } else {
      let mid1 = arr[len / 2 - 1];
      let mid2 = arr[len / 2];
      let avg = (mid1 + mid2) / 2;
      if (Number.isInteger(avg)) console.log(avg);
      else console.log(avg.toString());
    }
  }

  for (let i = 1; i <= n; i++) {
    let [op, valStr] = lines[i].trim().split(" ");
    let val = parseInt(valStr, 10);

    if (op === "a") {
      let pos = binarySearch(val);
      arr.splice(pos, 0, val);
      printMedian();
    } else if (op === "r") {
      let pos = binarySearch(val);
      if (pos < arr.length && arr[pos] === val) {
        arr.splice(pos, 1);
        printMedian();
      } else {
        console.log("Wrong!");
      }
    }
  }
}
