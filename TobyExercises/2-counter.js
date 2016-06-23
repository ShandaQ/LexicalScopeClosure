// Closure have to save some variales tha tht child function need
// when makeCounter returns the count() on line 9, it no longers exist
// the count() is still alive and has the variable counter and is still able to use this counter variable
// inner functions

function makeCounter() {
  var counter = 0;
  function count() {
    return counter++;
  }
  return count;
}

var count = makeCounter(); // count is a function call to count() on line 5
console.log(count());
console.log(count());
console.log(count());
console.log(count());
