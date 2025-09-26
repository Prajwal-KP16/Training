function countingSort(arr) {
  // Write your code here
  let freq = new Array(100).fill(0);
  for (let num of arr) {
    freq[num]++;
  }

  return freq;
}
