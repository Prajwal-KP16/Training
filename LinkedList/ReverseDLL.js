function reverse(llist) {
  // Write your code here
  if (llist === null || llist.next === null) return llist;

  let last = null;
  let newNode = llist;
  while (newNode !== null) {
    let temp = newNode.prev;
    newNode.prev = newNode.next;
    newNode.next = temp;

    last = newNode;
    newNode = newNode.prev;
  }

  llist = last;
  return llist;
}
