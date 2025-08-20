function treeHeight(root) {
	if(root === null) return -1;
    
    let lh = treeHeight(root.left);
    let rh = treeHeight(root.right);
    
    return 1 + Math.max(rh, lh);
}