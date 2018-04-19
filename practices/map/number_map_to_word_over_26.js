'use strict';
var number_map_to_word_over_26 = function(collection){
  var x = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i] <= 26){
      x.push(String.fromCharCode(96+collection[i]));
    }else if(collection[i] > 26 && collection[i] < 53){
      x.push(String.fromCharCode(97)+String.fromCharCode(96+collection[i]-26));
    }else{
      x.push(String.fromCharCode(98)+String.fromCharCode(96+collection[i]-52));
    }
  }
  return x;
};

module.exports = number_map_to_word_over_26;
