function getCount(objects) {
  // return objects.filter(obj => obj.x === obj.y).length;
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      count++;
    }
  }
  return count;
}
