'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  var sum = collection.reduce((o,p)=>o+p);
  sum/collection.length;
  return String.fromCharCode(96+Math.round(sum/collection.length));
}

module.exports = average_to_letter;

