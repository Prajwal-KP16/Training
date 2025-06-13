function Solution() {
  let original = [];
  let reversed = [];

  this.pushCharacter = (char) => {
    original.push(char);
  };
  this.enqueueCharacter = (char) => {
    reversed.unshift(char);
  };
  this.popCharacter = () => {
    return original.join("");
  };
  this.dequeueCharacter = () => {
    return reversed.join("");
  };
}
