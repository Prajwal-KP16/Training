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

function LCA(root, p, q) {
  if (!root) {
    return -1;
  }
  if (root.data === p || root.data === q) {
    return root.data;
  }

  let left = LCA(root.left, p, q);
  let right = LCA(root.right, p, q);

  if (left !== -1 && right !== -1) {
    return root.data;
  }

  return left !== -1 ? left : right;
}

function processData(input) {
  let arr = input.trim().split(/\s+/).map(Number);
  let n = arr[0];
  let values = arr.slice(1, n + 1);
  let p = arr[n + 1];
  let q = arr[n + 2];

  let root = null;
  for (let v of values) {
    root = insert(root, v);
  }

  let result = LCA(root, p, q);
  console.log(result);
}
