class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var zigzagLevelOrder = function (root) {
  let result = [];
  if (root === null) return result;

  let nodesQueue = [];
  nodesQueue.push(root);

  let leftToRight = true;

  while (nodesQueue.length > 0) {
    let size = nodesQueue.length;
    let row = new Array(size);

    for (let i = 0; i < size; i++) {
      let node = nodesQueue.shift();

      let index = leftToRight ? i : size - 1 - i;

      row[index] = node.val;

      if (node.left) {
        nodesQueue.push(node.left);
      }

      if (node.right) {
        nodesQueue.push(node.right);
      }
    }

    leftToRight = !leftToRight;
    result.push(row);
  }

  return result;
};
