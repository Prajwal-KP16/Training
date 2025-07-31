// function rainWater(arr) {
//   // Non-Optimal Solution
//   const n = arr.length;
//   const prefix = [];
//   prefix[0] = arr[0];

//   for (let i = 1; i < n; i++) {
//     prefix[i] = Math.max(prefix[i - 1], arr[i]);
//   }

//   const suffix = [];
//   suffix[n - 1] = arr[n - 1];

//   for (let i = n - 2; i >= 0; i--) {
//     suffix[i] = Math.max(suffix[i + 1], arr[i]);
//   }

//   let total = 0;
//   for (let i = 0; i < n; i++) {
//     let lmax = prefix[i];
//     let rmax = suffix[i];
//     if (lmax > arr[i] && rmax > arr[i]) {
//       total += Math.min(lmax, rmax) - arr[i];
//     }
//   }
//   return total;
// }

function rainWater(arr) {
  //Optimal Solution
  const n = arr.length;
  let lmax = 0,
    rmax = 0,
    total = 0,
    l = 0,
    r = n - 1;

  while (l < r) {
    if (arr[l] <= arr[r]) {
      if (lmax > arr[l]) {
        total += lmax - arr[l];
      } else {
        lmax = arr[l];
      }
      l++;
    } else {
      if (rmax > arr[r]) {
        total += rmax - arr[r];
      } else {
        rmax = arr[r];
      }
      r--;
    }
  }
  return total;
}

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = rainWater(arr);
console.log(result);
