function postOrder(root) {
	const stack = [];
  const post = [];
  while(root !== null || stack.length >0){
      if(root !== null){
          stack.push(root);
          root = root.left;
      }else{
          let temp = stack[stack.length - 1].right;
          
          if(temp === null){
              temp = stack.pop();
              post.push(temp.data);
              
              while(stack.length>0 && temp === stack[stack.length - 1].right){
                  temp = stack.pop();
                  post.push(temp.data);
              }
          }else{
              root = temp;
          }
      }
  }
  
  console.log(post.join(" "));
}