// ## Make a calculator with a closure
//
// Same concept as the counter. But this time, it's a calculator, you can do more than just count. You can add and subtract to the number that's hidden in the closure, and then access it via the getNumber() method. makeCalculator will return an object, and it will have the methods: getNumber, add, subtract, and times.


function makeCalculator() {
  var count = 0;
  var obj = {
    getNumber: function(){
      return count;
    },
    add: function(number){
      count += number;
    },
    subtract: function(number){
      count -= number;
    },
    times: function(number){
      count *= number;
    }
  };
  return obj;
}

var calc = makeCalculator();
console.log(calc.getNumber()); // outputs 0
calc.add(4);
console.log(calc.getNumber()); // outputs 4
console.log(calc.getNumber()); // outputs 4
calc.subtract(2);
console.log(calc.getNumber()); // outputs 2
calc.times(3);
console.log(calc.getNumber()); // outputs 6
