// Solution 1

var StockSpanner = function () {
  this.stack = [];
  this.span = -1;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.span = this.span + 1;

  while (
    this.stack.length > 0 &&
    this.stack[this.stack.length - 1][0] <= price
  ) {
    this.stack.pop()[1];
  }

  let ans =
    this.span -
    (this.stack.length === 0 ? -1 : this.stack[this.stack.length - 1][1]);

  this.stack.push([price, this.span]);

  return ans;
};

//solution 2

var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;

  while (
    this.stack.length > 0 &&
    this.stack[this.stack.length - 1][0] <= price
  ) {
    span += this.stack.pop()[1];
  }

  this.stack.push([price, span]);

  return span;
};
