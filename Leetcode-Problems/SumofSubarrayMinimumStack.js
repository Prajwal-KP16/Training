var findNse = function (arr) {
  const n = arr.length;
  const nse = [];
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    nse[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return nse;
};

var findPsee = function (arr) {
  const n = arr.length;
  const psee = [];
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }

    psee[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return psee;
};
var sumSubarrayMins = function (arr) {
  const n = arr.length;
  const mod = 1e9 + 7;
  let total = 0;
  const nse = findNse(arr);
  const psee = findPsee(arr);

  for (let i = 0; i < n; i++) {
    left = i - psee[i];
    right = nse[i] - i;

    total = (total + ((left * right * arr[i]) % mod)) % mod;
  }
  return total;
};
