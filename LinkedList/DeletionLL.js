class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  arrayToLL(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      this.head = new Node(arr[i], this.head);
    }
  }

  printList() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  removeHead() {
    if (this.head === null) return;

    this.head = this.head.next;
    return this.head;
  }

  removeTail() {
    if (this.head === null || this.head.next === null) return null;

    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  removeK(pos) {
    if (this.head === null) return this.head;

    if (pos === 1) {
      this.head = this.head.next;
      return this.head;
    }
    let temp = this.head;
    let count = 0;
    let prev = null;

    while (temp !== null) {
      count++;
      if (count === pos) {
        prev.next = prev.next.next;
        return;
      }
      prev = temp;
      temp = temp.next;
    }
    return this.head;
  }

  removeEle(ele) {
    if (this.head === null) return this.head;

    if (this.head.data === ele) {
      this.head = this.head.next;
      return this.head;
    }

    let temp = this.head;
    let prev = null;
    while (temp !== null) {
      if (temp.data === ele) {
        prev.next = prev.next.next;
        return;
      }
      prev = temp;
      temp = temp.next;
    }
    return this.head;
  }
}

const arr = [2, 4, 5, 3];
const linkedList = new LinkedList();
linkedList.arrayToLL(arr);
console.log("Before removing head:");
linkedList.printList();

// linkedList.removeHead();
// console.log("After removing head:");
// linkedList.printList();

// linkedList.removeTail();
// console.log("After removing tail:");
// linkedList.printList();

// linkedList.removeK(5);
// console.log("After removing k pos:");
// linkedList.printList();

linkedList.removeEle(1);
console.log("After removing ele:");
linkedList.printList();
