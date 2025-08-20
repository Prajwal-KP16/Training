var maxPathSum = function(root) {
    let maxValue = [0];
    maxValue[0] = Number.MIN_SAFE_INTEGER;
    maxPathDown(root, maxValue);
    return maxValue[0];
};

var maxPathDown = function(node, maxValue){
    if(node === null) return 0;

    let left = Math.max(0, maxPathDown(node.left, maxValue));
    let right = Math.max(0, maxPathDown(node.right, maxValue));
    maxValue[0] = Math.max(maxValue[0], left+right+node.val);
    return Math.max(left, right) + node.val;
}