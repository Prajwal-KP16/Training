function queensAttack(n, k, queenX, queenY, obstacles) {
  let top = n - queenX;
  let bottom = queenX - 1;
  let left = queenY - 1;
  let right = n - queenY;

  let topRight = Math.min(top, right);
  let topLeft = Math.min(top, left);
  let bottomRight = Math.min(bottom, right);
  let bottomLeft = Math.min(bottom, left);

  obstacles.forEach(([pawnX, pawnY]) => {
    if (pawnY === queenY) {
      if (pawnX > queenX) top = Math.min(top, pawnX - queenX - 1);
      else bottom = Math.min(bottom, queenX - pawnX - 1);
    } else if (pawnX === queenX) {
      if (pawnY > queenY) right = Math.min(right, pawnY - queenY - 1);
      else left = Math.min(left, queenY - pawnY - 1);
    } else if (Math.abs(pawnX - queenX) === Math.abs(pawnY - queenY)) {
      if (pawnX > queenX && pawnY > queenY)
        topRight = Math.min(topRight, pawnX - queenX - 1);
      else if (pawnX > queenX && pawnY < queenY)
        topLeft = Math.min(topLeft, pawnX - queenX - 1);
      else if (pawnX < queenX && pawnY > queenY)
        bottomRight = Math.min(bottomRight, queenX - pawnX - 1);
      else if (pawnX < queenX && pawnY < queenY)
        bottomLeft = Math.min(bottomLeft, queenX - pawnX - 1);
    }
  });

  return (
    top + bottom + left + right + topRight + topLeft + bottomRight + bottomLeft
  );
}
