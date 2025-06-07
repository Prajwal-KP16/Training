Array.prototype.myMap = function (callback) {
  const inputArr = this;
  const newArray = [];
  for (let i = 0; i < inputArr.length; i++) {
    newArray.push(callback(inputArr[i], i, inputArr));
  }
  return newArray;
};

//OR

Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
