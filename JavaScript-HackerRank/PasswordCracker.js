function passwordCracker(passwords, loginAttempt) {
  // Write your code here
  const n = loginAttempt.length;
  const failed = new Array(n + 1).fill(false);
  const path = [];

  function dfs(pos) {
    if (pos === n) return true;
    if (failed[pos]) return false;

    for (let i = 0; i < passwords.length; i++) {
      const pw = passwords[i];
      if (loginAttempt.startsWith(pw, pos)) {
        path.push(pw);
        if (dfs(pos + pw.length)) return true;
        path.pop();
      }
    }
    failed[pos] = true;
    return false;
  }
  if (dfs(0)) {
    return path.join(" ");
  } else {
    return "WRONG PASSWORD";
  }
}
