function Solution() {
  this.insert = function (head, data) {
    //complete this method
    var newNode = new Node(data);

    if (head === null) {
      head = newNode;
    } else {
      var current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    return head;
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}
