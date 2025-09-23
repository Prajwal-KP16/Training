class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Pair {
  constructor(node, vertical) {
    this.node = node;
    this.vertical = vertical;
  }
}

function topView(root) {
  let ans = [];
  if (!root) return ans;

  let map = new Map();
  let q = [];
  q.push(new Pair(root, 0));

  while (q.length > 0) {
    let it = q.shift();
    let hd = it.vertical;
    let temp = it.node;

    if (!map.has(hd)) {
      map.set(hd, temp.data);
    }

    if (temp.left !== null) {
      q.push(new Pair(temp.left, hd - 1));
    }
    if (temp.right !== null) {
      q.push(new Pair(temp.right, hd + 1));
    }
  }

  let sortedKeys = [...map.keys()].sort((a, b) => a - b);
  for (let key of sortedKeys) {
    ans.push(map.get(key));
  }
  return ans;
}
