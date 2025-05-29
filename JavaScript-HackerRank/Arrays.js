function getSecondLargest(nums) {
  // Complete the function
  let max = 0;
  let sMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      sMax = max;
      max = nums[i];
    } else if (nums[i] > sMax && nums[i] !== max) {
      sMax = nums[i];
    }
  }
  return sMax;
}
