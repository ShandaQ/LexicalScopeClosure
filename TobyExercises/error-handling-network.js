
// before try/catch

var response = {};
var errorCode = makeNetworkRequest('http://google.com', response);
if (errorCode === 'OK') {
  
}


// With try/catch

try {
  var response = makeNetworkRequest('http://google.com');
} catch (e) {
  console.log(e.message);
}
