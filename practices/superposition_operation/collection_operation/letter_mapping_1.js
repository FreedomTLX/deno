'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  var a = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2==0){
      a.push(String.fromCharCode(96+collection[i]));
    }
  }
  return a;
}

module.exports = even_to_letter;
