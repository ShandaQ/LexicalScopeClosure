// ## Async
//
// when ever you are reading a file or object that are far away you should use asynch
//
// Use it to add two numbers. Then use it to add two strings, while gracefully handling any errors that occurs using the Node's error handling convention of checking the first parameter for an error.


function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      callback(new Error('Arguments must be numbers'));
      return;
    }
    callback(null, x + y);
  }, 1000);
}

// console.log(asyncAdd(3,5, function(){
//   console.log('callback function done with adding the numbers');
// }));


asyncAdd(2,3, function(err, results){
  if(err){
    console.log('this is the callback function and there was an error, therefore the numbers could not be added');
    console.log(err.message);
    return;
  }else{
    console.log(results);
    console.log('this is the callback fucntiona and no error occur, therefore the numbers were added together');
  }

});
