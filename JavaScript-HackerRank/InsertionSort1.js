function insertionSort1(n, arr) {
  // Write your code here
  let val = arr[n - 1];
  let i = n - 2;

  while (i >= 0 && arr[i] > val) {
    arr[i + 1] = arr[i];
    console.log(arr.join(" "));
    i--;
  }
  arr[i + 1] = val;
  console.log(arr.join(" "));
}
