'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var x = [];
  if(number_a < number_b){
    for(var i = number_a; i <= number_b; i++){
      if(i <= 26){
        x.push(String.fromCharCode(96+i));
      }else if(i > 26 && i < 53){
        x.push(String.fromCharCode(97)+String.fromCharCode(96+i-26));
      }else{
        x.push(String.fromCharCode(98)+String.fromCharCode(96+i-52));
      }
    }
    return x;
  }else if(number_a > number_b){
    for(var j = number_a; j >=number_b; j--){
      if(j >26 && j < 53){
        x.push(String.fromCharCode(97)+String.fromCharCode(96+j-26));
      }else if(j <= 26){
        x.push(String.fromCharCode(96+j));
      }else{
        x.push(String.fromCharCode(98)+String.fromCharCode(96+j-52));
      }
    }
    return x;
  }else if(number_a==number_b){
    if(number_b >26)
      x.push(String.fromCharCode(97)+String.fromCharCode(96+number_b-26));
  }
  return x;
}

module.exports = get_letter_interval_2;

