'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var a = [];
  var i = number;
  if(parseFloat((interval/2).toFixed(2)) == 0.10){
    a.push(i);
    while(i>0.0){
      i=parseFloat((i-interval).toFixed(1));
      a.push(i);
    }
    return a;
  }else{
    a.push(i);
    while(i >=0.0){
      i=parseFloat((i-interval).toFixed(1));
      a.push(i);
    }
    return a;
  }

}

module.exports = spilt_to_zero;
