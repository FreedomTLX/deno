'use strict';

function average_uneven(collection) {
  //在这里写入代码
  var j = 0;
  var count = 0;
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2==1){
      j=j+collection[i];
      count++;
    }
  }
  return j/count;
}

module.exports = average_uneven;
