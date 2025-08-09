// Brute force solution

var maxSlidingWindow = function (nums, k) {
  const list = [];
  const n = nums.length;

  for (let i = 0; i <= n - k; i++) {
    maxi = nums[i];
    for (let j = i; j <= i + k - 1; j++) {
      maxi = Math.max(maxi, nums[j]);
    }
    list.push(maxi);
  }

  return list;
};
