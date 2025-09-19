function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function insert(root, data) {
  if (!root) {
    return new Node(data);
  }
  if (data <= root.data) {
    root.left = insert(root.left, data);
  } else {
    root.right = insert(root.right, data);
  }
  return root;
}

function processData(input) {
  let arr = input.trim().split(/\s+/).map(Number);
  let n = arr[0];
  let values = arr.slice(1, n + 1);
  let insertVal = arr[n + 1];

  let root = null;
  for (let v of values) {
    root = insert(root, v);
  }
  root = insert(root, insertVal);

  function preorder(node, res = []) {
    if (!node) return res;
    res.push(node.data);
    preorder(node.left, res);
    preorder(node.right, res);
    return res;
  }

  console.log(preorder(root).join(" "));
}
