'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var a = [];
  if(number_a < number_b){
    for(var i = number_a; i <= number_b; i++){
      if(i%2==0){
        a.push(i);
      }
    }
    return a;
  }else if(number_a > number_b){
    for(var j = number_a; j >= number_b; j--){
      if(j%2==0){
        a.push(j);
      }
    }
    return a;
  }else if(number_a == number_b && number_a%2==0){
    a.push(number_a);
    return a;
  }else{
    return a;
  }

}


module.exports = get_integer_interval_2;
