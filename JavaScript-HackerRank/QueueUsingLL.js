class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";

    const removedValue = this.front.value;
    this.front = this.front.next;
    this.length--;

    if (this.front === null) {
      this.rear = null;
    }

    return removedValue;
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.front.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    let current = this.front;
    let result = "";
    while (current) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print();
console.log(q.dequeue());
console.log(q.peek());
console.log(q.size());
