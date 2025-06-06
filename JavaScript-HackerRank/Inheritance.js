class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here

  constructor(firstName, lastName, idNumber, scores) {
    super(firstName, lastName, idNumber);
    this.scores = scores;
  }
  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    const average = sum / this.scores.length;

    if (average >= 90) {
      return "O";
    } else if (average >= 80) {
      return "E";
    } else if (average >= 70) {
      return "A";
    } else if (average >= 55) {
      return "P";
    } else if (average >= 40) {
      return "D";
    } else {
      return "T";
    }
  }
}
