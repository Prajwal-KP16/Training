class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeft(i) {
    return 2 * i + 1;
  }
  getRight(i) {
    return 2 * i + 2;
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(i) {
    while (i > 0) {
      let p = this.getParent(i);
      if (this.heap[p] > this.heap[i]) {
        [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
        i = p;
      } else break;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return root;
  }

  bubbleDown(i) {
    let left = this.getLeft(i),
      right = this.getRight(i);
    let smallest = i;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.bubbleDown(smallest);
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

function cookies(k, A) {
  let heap = new MinHeap();
  for (let val of A) heap.insert(val);

  let operations = 0;

  while (heap.peek() !== null && heap.peek() < k) {
    if (heap.size() < 2) return -1;
    let least = heap.extractMin();
    let second = heap.extractMin();
    let newCookie = least + 2 * second;
    heap.insert(newCookie);
    operations++;
  }

  return operations;
}
