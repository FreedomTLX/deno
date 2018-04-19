'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  var a = 0;
  for(var i = 0; i< collection.length; i++){
    if(collection[i]%2==1){
      a=a+collection[i]*3+5;
    }
  }
  return a;
}

module.exports = hybrid_operation_to_uneven;

