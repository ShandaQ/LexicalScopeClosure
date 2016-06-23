 - Try and Catch is used with sync programming -

    function add(x, y) {
      if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Arguments must be numbers');
      }
      return x + y;
    }

    console.log(add(1,2));
    try{
      add("1","2");
    }catch(error){
      console.log('Entering catch block');
      console.log(error.message);
    }


 - When doing things asynchronously use callback function if(err)/else -

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

  - What is Closure -
    - when a child out lives its parents
    - inner function can access anything thing that its parents has even if that parent function dies off

    Usage of Closures
      - hide information - to not use a lot of global variables
