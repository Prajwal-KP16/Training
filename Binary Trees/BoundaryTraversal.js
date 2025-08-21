class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var isLeaf = function (root) {
  if (!root.left && !root.right) return true;
  else return false;
};

var addLeftBoundary = function (root, res) {
  let curr = root.left;
  while (curr !== null) {
    if (isLeaf(curr) === false) res.push(curr.data);
    if (curr.left !== null) curr = curr.left;
    else curr = curr.right;
  }
};

var addRightBoundary = function (root, res) {
  let curr = root.right;
  let temp = [];
  while (curr !== null) {
    if (isLeaf(curr) === false) res.push(curr.data);
    if (curr.right !== null) curr = curr.right;
    else curr = curr.left;
  }

  for (let i = temp.length - 1; i >= 0; i++) {
    res.push(temp[i]);
  }
};

var addLeaves = function (root, res) {
  if (isLeaf(root)) {
    res.push(root.data);
    return;
  }
  if (root.left !== null) addLeaves(root.left, res);
  if (root.right !== null) addLeaves(root.right, res);
};

var printBoundary = function (node) {
  let ans = [];
  if (isLeaf(node) === false) ans.push(node.data);
  addLeftBoundary(node, ans);
  addLeaves(node, ans);
  addRightBoundary(node, ans);
  return ans;
};
