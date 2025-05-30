// Use class Syntax to Define a Constructor Function
// ES6 provides a new syntax to create objects, using the class keyword.

// In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

// In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

// // Explicit constructor
// class SpaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
//   takeOff() {
//     console.log("To " + this.targetPlanet + "!");
//   }
// }

// // Implicit constructor
// class Rocket {
//   launch() {
//     console.log("To the moon!");
//   }
// }

// const zeus = new SpaceShuttle('Jupiter');
// // prints To Jupiter! in console
// zeus.takeOff();

// const atlas = new Rocket();
// // prints To the moon! in console
// atlas.launch();
// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

// Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

// The constructor method is a special method for creating and initializing an object created with a class.

// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'
