function reverse(llist) {
  /* RECURSSIVE METHOD
    
    if(llist === null || llist.next === null) return llist;
    
    let newHead = reverse(llist.next);
    let front = llist.next;
    front.next = llist;
    llist.next = null;
    return newHead; */

  /* STACK METHOD
    
    const stack = [];
    let temp = llist;
    while(temp !== null){
        stack.push(temp.data);
        temp = temp.next;
    }
    
    temp = llist;
    while(temp !== null){
        temp.data = stack.pop();
        temp = temp.next;
    }
    return llist;
    // time - O(2N)  space - O(N)*/

  let temp = llist;
  let prev = null;
  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
  /* time - O(N) space - O(1) */
}
