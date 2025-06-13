function climbingLeaderboard(ranked, player) {
  // Write your code here
  console.log(ranked, player);

  let pos = [];
  let rank = [...new Set(ranked)];
  let playerIndex = 0;
  let i = rank.length - 1;
  player.forEach((ele) => {
    while (i >= 0) {
      if (ele >= rank[i]) {
        i--;
      } else {
        pos.push(i + 2);
        break;
      }
    }
    if (i < 0) pos.push(1);
  });

  return pos;
}
