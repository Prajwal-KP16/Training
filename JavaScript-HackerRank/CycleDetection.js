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
}

function hasCycle(head) {
  if (head === null) return 0;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return 1;
    }
  }

  return 0;
}
