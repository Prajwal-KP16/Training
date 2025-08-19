var diameterOfBinaryTree = function(root) {
    let dia = [0];
    height(root, dia);
    return dia[0];
};

var height = function(node, dia){
    if(node === null){
        return 0;
    }

    let lh = height(node.left, dia);
    let rh = height(node.right, dia);
    dia[0] = Math.max(dia[0], lh+rh);
    return 1 + Math.max(lh, rh);
}