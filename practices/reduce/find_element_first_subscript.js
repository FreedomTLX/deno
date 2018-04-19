'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for(var i = 0; i < collection.length; i++ ){
    if(collection[i] == element){
      return i;
      break;
    }
  }
}

module.exports = calculate_elements_sum;

