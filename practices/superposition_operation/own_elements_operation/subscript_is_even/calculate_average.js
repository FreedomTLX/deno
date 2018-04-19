'use strict';
var calculate_average = function(collection){
  var j = 0;
  var count = 0;
  for(var i = 0; i < collection.length; i++){
    if(i%2==0 && i !=0){
      j=j+collection[i];
      count++;
    }
  }
  return j/count;

};
module.exports = calculate_average;
