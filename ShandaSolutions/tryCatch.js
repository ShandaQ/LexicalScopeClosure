// ## Try/Catch is for sync functions 
//
// Use this function to add two numbers. Then use it to add two strings, while gracefully handling any errors that occurs using the try/catch statement.

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
