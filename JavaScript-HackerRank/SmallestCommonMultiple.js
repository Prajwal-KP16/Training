function scm(n1, n2) {
  let mini = Math.min(n1, n2);
  let maxi = Math.max(n1, n2);

  for (let i = maxi; i <= mini * maxi; i += maxi) {
    if (i % mini === 0) {
      return i;
    }
  }
}

function smallestCommons(arr) {
  let mini = Math.min(...arr);
  let maxi = Math.max(...arr);
  let lcm = 1;
  for (let i = mini; i <= maxi; i++) {
    lcm = scm(lcm, i);
  }
  return lcm;
}

smallestCommons([1, 5]);
