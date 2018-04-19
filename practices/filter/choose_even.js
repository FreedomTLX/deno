'use strict';

function choose_even(collection) {
  //在这里写入代码
  var a = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2==0){
      a.push(collection[i]);
    }
  }
  return a;
}

module.exports = choose_even;
