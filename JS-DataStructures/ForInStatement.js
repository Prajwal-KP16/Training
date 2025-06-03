// Iterate Through the Keys of an Object with a for...in Statement
// Sometimes you need to iterate through all the keys within an object. You can use a for...in loop to do this. The for...in loop looks like:

// const refrigerator = {
//   'milk': 1,
//   'eggs': 12,
// };

// for (const food in refrigerator) {
//   console.log(food, refrigerator[food]);
// }
// This code logs milk 1 and eggs 12, with each key-value pair on its own line.

// We defined the variable food in the loop head and this variable was set to each of the object's keys on each iteration, resulting in each food's name being printed to the console.

// NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  // Only change code below this line
  let count = 0;
  for (let names in allUsers) {
    if (allUsers[names].online == true) {
      count++;
    }
  }
  return count;
  // Only change code above this line
}

console.log(countOnline(users));
