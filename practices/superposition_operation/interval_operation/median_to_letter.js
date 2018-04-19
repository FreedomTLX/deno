'use strict';

function median_to_letter(collection) {
  //在这里写入代码

  var b = Math.round((collection[collection.length-1]+collection[0])/2);
  if(b <= 26){
    return String.fromCharCode(96+b);
  }else if(b > 26 && b < 53){
    return String.fromCharCode(97)+String.fromCharCode(96+b-26);
  }else{
    return String.fromCharCode(98)+String.fromCharCode(96+b-52);
  }


}

module.exports = median_to_letter;
