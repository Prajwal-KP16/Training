class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

function isBalanced(root){
  return dfsHeight(root) !== -1;
}

function dfsHeight(root){
  if( root === null) return 0;

  let leftHeight = dfsHeight(root.left);
  if(leftHeight === -1) return -1;
  let rightHeight = dfsHeight(root.right);
  if(rightHeight === -1) return -1;

  if(Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
}