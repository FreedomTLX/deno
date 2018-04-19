'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var a = Array();
  var j = 0 ;
  for(var i = 0; i<collection.length ; i++){
    if(collection[i]%2 == 0){
      a[j]=collection[i]
      j++;
    }
  }
  return a;
}

module.exports = collect_all_even;
