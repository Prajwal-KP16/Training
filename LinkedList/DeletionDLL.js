class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLL {
  constructor() {
    this.head = null;
  }

  arrayToDLL(arr) {
    this.head = new Node(arr[0]);
    this.prev = this.head;
    for (let i = 1; i < arr.length; i++) {
      let temp = new Node(arr[i], null, this.prev);
      this.prev.next = temp;
      this.prev = temp;
    }
    return this.head;
  }

  printDLL() {
    if (this.head === null) return this.head;

    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  deleteHead() {
    if (this.head === null || this.head.next === null) return null;
    this.head = this.head.next;
  }

  deleteTail() {
    if (this.head === null || this.head.next === null) return null;

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail = tail.prev;

    tail.next = null;
    tail.prev = null;

    return tail;
  }

  deletePosition(pos) {
    if (this.head === null) return null;

    let temp = this.head;
    let count = 0;
    while (temp !== null) {
      count++;
      if (count === pos) break;
      temp = temp.next;
    }

    let back = temp.prev;
    let front = temp.next;

    if (front === null && back === null) {
      return null;
    }

    if (front === null) {
      this.deleteTail();
    }

    if (back === null) {
      this.deleteHead();
    }

    back.next = front;
    front.prev = back;

    temp.next = null;
    temp.prev = null;

    return this.head;
  }
}

const arr = [3, 5, 6, 7, 9];
const doubly = new DoublyLL();

doubly.arrayToDLL(arr);
doubly.printDLL();

// doubly.deleteHead();
// console.log("After deleting the head");
// doubly.printDLL();

// doubly.deleteTail();
// console.log("After deleting the tail");
// doubly.printDLL();

doubly.deletePosition(3);
console.log("After deleting the position");
doubly.printDLL();
