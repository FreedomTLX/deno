'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var a = 0;
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2==0){
      a = collection[i];

    }
  }
  return a;
}

module.exports = find_last_even;
