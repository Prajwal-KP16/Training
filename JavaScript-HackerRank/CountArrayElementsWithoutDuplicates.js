var countUnique = function (arr) {
  if (arr.length <= 1) {
    return arr.length;
  }
  let index = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[index++] = arr[i];
    }
  }
  return index;
};

let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5, 5];

const newSize = countUnique(arr);

console.log(arr.slice(0, newSize).join(" "));
