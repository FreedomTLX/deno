'use strict';

function amount_even(collection) {
  //在这里写入代码
  var j = 0;
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2==0){
      j=j+collection[i];
    }
  }
  return j;
}

module.exports = amount_even;
