# SQK File Summary

## Install
 ` npm install file-summary-sqk`

## Usage
````
var fileSummary = require('./file-summary-sqk');

var fileName = process.argv[2];
 fileSummary(fileName, function(err, summary){
   if(err){
     console.error(err.message);
     return;
   }
   console.log('Lines:', summary.lineCount);
   console.log('Characters:', summary.charCount);
 });
