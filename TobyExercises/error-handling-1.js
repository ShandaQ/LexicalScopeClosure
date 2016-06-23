function distance(point1, point2) {
  if (!point1 || !point2) {
    throw new Error('Must provide valid arguments.');
  }
  if (typeof point1.x !== 'number' ||
      typeof point1.y !== 'number' ||
      typeof point2.x !== 'number' ||
      typeof point2.y !== 'number') {
    throw new Error('Must provide valid arguments.');
  }

  var sdX = squareOfDiff(point1.x, point2.y);
  var sdY = squareOfDiff(point1.y, point2.y);
  return Math.sqrt(sdX + sdY);
}

function squareOfDiff(a, b) {
  var diff = a - b;
  return square(diff);
}

function square(num) {
  return num * num;
}

try {
  var point1 = { x: 0, y: 0 };
  var point2 = { x: 1, y: 1 };
  var dist = distance({}, {});
  console.log(dist);
} catch (error) {
  console.log('Caught:', error.message);
}
