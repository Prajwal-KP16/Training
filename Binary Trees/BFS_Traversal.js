var levelOrder = function(root) {
    if(root === null) return [];
    
    const result = [];
    const queue = [root];
    // queue.push(root);
    
    while(queue.length > 0){
        const node = queue.shift();
        result.push(node.data);
        
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    
    console.log(result.join(" "))
}