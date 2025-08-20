//Optimized solution 
// Time complexity: O(2N)
// space complexity: O(k) + O(n-k)

var maxSlidingWindow = function(nums, k) {
  const list = [];
  const dq = [];
  const n = nums.length;

  for(let i = 0; i<n; i++){
      if(dq.length > 0 && dq[0] <= i-k){
          dq.pop()[0];
      }

      while(dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]){
          dq.pop()[dq.length - 1];
      }

      dq.push(i);

      if(i >= k-1) list.push(nums[dq[0]]);
  }

  return list;
};