'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var a=0;
  for(var i = 0; i < collection.length; i++ ){
    if(collection[i] == element){
      a=i;
    }
  }
  return a;
}

module.exports = calculate_elements_sum;
