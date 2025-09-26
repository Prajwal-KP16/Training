function countingSort(arr) {
  // Write your code here
  let freq = new Array(100).fill(0);
  for (let num of arr) {
    freq[num]++;
  }

  let sorted = [];
  for (let i = 0; i < 100; i++) {
    while (freq[i] > 0) {
      sorted.push(i);
      freq[i]--;
    }
  }
  return sorted;
}
