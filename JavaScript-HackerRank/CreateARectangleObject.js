function Rectangle(a, b) {
  // this.length = a;
  // this.width = b;
  // this.perimeter = 2*(a+b);
  // this.area = a * b;
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
}
