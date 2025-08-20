class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class Pair {
  constructor(node, num) {
      this.node = node;
      this.num = num;
  }
}

function allTraversals(root) {
  if (root === null) return { preorder: [], inorder: [], postorder: [] };

  var st = [];
  st.push(new Pair(root, 1));

  var preorder = [];
  var inorder = [];
  var postorder = [];

  while (st.length > 0) {
      var it = st.pop();

      if (it.num === 1) {
          preorder.push(it.node.data);
          it.num++;
          st.push(it);

          if (it.node.left !== null) {
              st.push(new Pair(it.node.left, 1));
          }
      }
      else if (it.num === 2) {
          inorder.push(it.node.data);
          it.num++;
          st.push(it);

          if (it.node.right !== null) {
              st.push(new Pair(it.node.right, 1));
          }
      }
      else {
          postorder.push(it.node.data);
      }
  }

  return { preorder: preorder, inorder: inorder, postorder: postorder };
}