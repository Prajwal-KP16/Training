class QueImpl {
  constructor() {
    this.items = {};
    this.start = 0;
    this.end = 0;
  }

  push(x) {
    this.items[this.end] = x;
    this.end++;
  }

  pop() {
    if (this.isEmpty()) return "Empty Queue";
    const popped = this.items[this.start];
    delete this.items[this.start];
    this.start++;
    return popped;
  }

  top() {
    if (this.isEmpty()) return "Empty Queue";
    return this.items[this.start];
  }

  isEmpty() {
    return this.end === this.start;
  }

  size() {
    return this.end - this.start;
  }

  print() {
    const result = [];
    for (let i = this.start; i < this.end; i++) {
      result.push(this.items[i]);
    }
    console.log(result.join(" "));
  }
}
