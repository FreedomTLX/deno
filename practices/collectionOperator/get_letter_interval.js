'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var x = [];
  if(number_a < number_b){
    for(var i = 0; i < number_b; i++){
      x.push(String.fromCharCode(97+i));
    }
    return x;
  }else if(number_a > number_b){
    for(var j = number_a; j >=number_b; j--){
      x.push(String.fromCharCode(96+j));
    }
    return x;
  }else if(number_a==number_b){
    x.push(String.fromCharCode(96+number_b));
  }
  return x;
}

module.exports = get_letter_interval;
