var fs = require('fs');

module.exports = function fileSummary(fileName, callback){

  // read in the file
  fs.readFile(fileName, function(err, buffer) {
    if(err){
      callback(err);
      return;
    }

    var contents = buffer.toString();
    var summary = {
      lineCount: contents.split('\n').length,
      charCount: contents.length
    };
    callback(null,summary);
  });

};
