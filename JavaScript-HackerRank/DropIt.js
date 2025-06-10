function dropElements(arr, func) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      index = i;
      break;
    }
  }
  return index === -1 ? [] : arr.slice(index);
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
