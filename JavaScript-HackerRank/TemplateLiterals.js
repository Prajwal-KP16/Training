function sides(literals, ...expressions) {
  const A = expressions[0];
  const P = expressions[1];
  let s1 = (P + Math.sqrt(P * P - 16 * A)) / 4;
  let s2 = (P - Math.sqrt(P * P - 16 * A)) / 4;
  return [s1, s2].sort();
}
