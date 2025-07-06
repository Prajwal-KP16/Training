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

  lengthOfLL() {
    let count = 0;
    let temp = this.head;
    while (temp != null) {
      temp = temp.next;
      count++;
    }
    return count;
  }

  searchEle(val) {
    let temp = this.head;
    while (temp != null) {
      if (temp.data == val) return "Element Found";
      temp = temp.next;
    }

    return "Element not found";
  }
}

const arr = [3, 5, 6, 8, 9, 2];
const linkedList = new LinkedList();

linkedList.arrayToLL(arr);
console.log("Linked List: ");
linkedList.printLL();

console.log("Length of Linked List: " + linkedList.lengthOfLL());

console.log(linkedList.searchEle(6));
