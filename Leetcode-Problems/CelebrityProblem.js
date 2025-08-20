//Brute Force Solution

function findCelebrity(matrix){
  const n = matrix.length;
  let knowsMe = new Array(n).fill(0);
  let iKnow = new Array(n).fill(0);
  

  for(let i = 0; i< n; i++){
    for(let j =0; j<n; j++){
      if(matrix[i][j] === 1){
        knowsMe[j]++;
        iKnow[i]++;
      }
    }
  }

  for(let i=0; i<n; i++){
    if(knowsMe[i] === n-1 && iKnow[i] === 0){
      return i;
    }
    
  }
  
  return -1;
}

// Optimised Solution

function findCelebrity(matrix) {
  const n = matrix.length;
  let top = 0;
  let down = n-1;

  while(top < down){
    if(matrix[top][down] === 1){
      top++;
    }else{
      down--;
    }
  }

  let candidate = top;

  for(let i = 0; i< n; i++){
    if(i !== candidate){
      if(matrix[candidate][i] === 1 || matrix[i][candidate] === 0){
        return -1;
      }
    }
  }

  return candidate;
}

const matrix = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
];

console.log(findCelebrity(matrix)); 
