class Polygon {
  constructor(arr) {
    this.arr = arr;
  }
  perimeter() {
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum += this.arr[i];
    }
    return sum;
  }
}
