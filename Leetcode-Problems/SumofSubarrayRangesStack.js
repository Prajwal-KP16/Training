var findNse = function (nums) {
  const n = nums.length;
  const nse = [];
  const stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    nse[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return nse;
};

var findPse = function (nums) {
  const n = nums.length;
  const pse = [];
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] > nums[i]) {
      stack.pop();
    }
    pse[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return pse;
};

var findNge = function (nums) {
  const n = nums.length;
  const nge = [];
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }

    nge[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return nge;
};

var findPge = function (nums) {
  const n = nums.length;
  const pge = [];
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop();
    }

    pge[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return pge;
};
var subArrayRanges = function (nums) {
  const n = nums.length;
  let nse = findNse(nums);
  let pse = findPse(nums);
  let nge = findNge(nums);
  let pge = findPge(nums);
  let totalMin = 0;
  let totalMax = 0;
  const mod = 1e9 + 7;

  for (let i = 0; i < n; i++) {
    let leftMin = i - pse[i];
    let rightMin = nse[i] - i;
    let minCount = leftMin * rightMin;

    let leftMax = i - pge[i];
    let rightMax = nge[i] - i;
    let maxCount = leftMax * rightMax;

    totalMin = (totalMin + minCount * nums[i]) % mod;
    totalMax = (totalMax + maxCount * nums[i]) % mod;
  }
  return (totalMax - totalMin + mod) % mod;
};
