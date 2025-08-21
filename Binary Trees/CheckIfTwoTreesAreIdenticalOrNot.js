class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var isSameTree = function (p, q) {
  if (p === null || q === null) {
    return p === q;
  }

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
