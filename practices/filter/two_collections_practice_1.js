'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var a=[];
  for(var i = 0; i < collection_a.length; i++ ){
    for(var j = 0; j < collection_b.length; j++){
      if(collection_a[i] == collection_b[j]){
        a.push(collection_a[i]);
      }
    }
  }
  return a;
}

module.exports = choose_common_elements;
