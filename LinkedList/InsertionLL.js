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

  printLL() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  insertHead(ele) {
    this.head = new Node(ele, this.head);
    return this.head;
  }

  insertTail(ele) {
    if (this.head === null) {
      return (this.head = new Node(ele));
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    let newNode = new Node(ele);
    temp.next = newNode;
    return this.head;
  }

  insertPosition(ele, pos) {
    if (this.head === null) {
      pos === 1 ? (this.head = new Node(ele)) : null;
    }

    if (pos === 1) {
      this.head = new Node(ele, this.head);
    }

    let temp = this.head;
    let count = 0;
    while (temp !== null) {
      count++;
      if (count === pos - 1) {
        let newNode = new Node(ele, temp.next);
        temp.next = newNode;
      }
      temp = temp.next;
    }
    return this.head;
  }
}

const arr = [4, 5, 7, 9];
const linkedList = new LinkedList();

linkedList.arrayToLL(arr);
console.log("After adding ele from array to LL:");
linkedList.printLL();

// linkedList.insertHead(2494);
// console.log("After insert ele to head:");
// linkedList.printLL();

// linkedList.insertTail(2494);
// console.log("After insert ele to tail:");
// linkedList.printLL();

linkedList.insertPosition(2494, 3);
console.log("After insert ele to k position:");
linkedList.printLL();
