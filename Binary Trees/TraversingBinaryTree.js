var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

//InOrder Traversal
//1st Way
function inOrder(root) {
	if(root === null) return;

  inOrder(root.left);
  process.stdout.write(root.data + " ");
  inOrder(root.right);
}

//2nd Way and using stack
function inOrder(root) {
	const inOrder = [];
  const stack = [];
  let node = root;
  
  while(true){
      if(node !== null){
          stack.push(node);
          node = node.left;
      }else{
          if(stack.length === 0){
              break;
          }
          node = stack.pop();
          inOrder.push(node.data);
          node = node.right;
      }
  }
  console.log(inOrder.join(" "));
}


//PreOrder Traversal
//1st Way
function preOrder(root) {
	if(root === null) return;
    
  process.stdout.write(root.data + " ");
  preOrder(root.left);
  preOrder(root.right);
}

//2nd Way and using stack
function preOrder(root) {
	if(!root) return [];

  const preOrder = [];
  const stack = [];
  stack.push(root);
  while(stack.length > 0){
      root = stack.pop();
      preOrder.push(root.data);
      
      if(root.right) stack.push(root.right);
      if(root.left) stack.push(root.left);
  }
  
  console.log(preOrder.join(" "));
}

//PostOrder Traversal
//1st Way
function postOrder(root) {
	if(root === null) return;
    
  postOrder(root.left);
  postOrder(root.right);
  process.stdout.write(root.data + " ");
}

//2nd Way and using stack
function postOrder(root) {
	if(root === null) return [];
    const stack1 = [];
    const stack2 = [];
    const postOrder = [];
    
    stack1.push(root);
    while(stack1.length > 0){
        root = stack1.pop();
        stack2.push(root);
        
        if(root.left) stack1.push(root.left);
        if(root.right) stack1.push(root.right);
    }
    
    while(stack2.length > 0){
        postOrder.push(stack2.pop().data);
    }
    
    console.log(postOrder.join(" "));
}

