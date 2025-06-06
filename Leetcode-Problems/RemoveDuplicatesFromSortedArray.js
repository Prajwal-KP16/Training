var removeDuplicates = function (arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
};
