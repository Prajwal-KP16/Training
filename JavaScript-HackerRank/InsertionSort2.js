function insertionSort2(n, arr) {
  // Write your code here
  for (let i = 1; i < n; i++) {
    let value = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = value;
    console.log(arr.join(" "));
  }
}
