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
    if (arr.length === 0) return null;

    this.head = new Node(arr[0]);
    let temp = this.head;

    for (let i = 1; i < arr.length; i++) {
      let newNode = new Node(arr[i]);
      temp.next = newNode;
      newNode.prev = temp;
      temp = newNode;
    }
    return this.head;
  }

  printDLL() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  insertHead(val) {
    let newNode = new Node(val);

    newNode.next = this.head;

    if (this.head !== null) {
      this.head.prev = newNode;
    }

    this.head = newNode;

    return this.head;
  }

  insertBeforeTail(ele) {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }

    let tailPrev = tail.prev;
    let newNode = new Node(ele);
    newNode.next = tail;
    newNode.prev = tailPrev;

    tailPrev.next = newNode;
    tail.prev = newNode;

    return this.head;
  }
}

const arr = [2, 4, 5, 6, 8];
const doublyLL = new DoublyLL();

doublyLL.arrayToDLL(arr);
console.log("Doubly LinkedList: ");
doublyLL.printDLL();

doublyLL.insertHead(10);
console.log("Doubly LinkedList after head insertion: ");
doublyLL.printDLL();

doublyLL.insertBeforeTail(10);
console.log("Doubly LinkedList before tail insertion: ");
doublyLL.printDLL();
