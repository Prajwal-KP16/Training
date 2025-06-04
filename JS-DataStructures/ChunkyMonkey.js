// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i += size) {
    arr1.push(arr.slice(i, i + size));
  }
  return arr1;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
