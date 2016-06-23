# Converts Celsius to Fahrenheit

## Install
 ` npm install convert-temp`

## Usage
````

ar convertCtoF = require('./index');

var degreesC = Number(process.argv[2]);
var degreesF = convertCtoF(degreesC);
console.log(degreesF);
