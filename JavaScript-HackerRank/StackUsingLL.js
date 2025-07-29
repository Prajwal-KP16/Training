class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (!this.top) return "Stack is empty";
    const value = this.top.value;
    this.top = this.top.next;
    this.length--;
    return value;
  }

  peek() {
    if (!this.top) return "Stack is empty";
    return this.top.value;
  }

  size() {
    return this.length;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.peek());
console.log(s.pop());
console.log(s.size());
