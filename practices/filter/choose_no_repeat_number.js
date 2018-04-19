'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var r = [];
  for(var i = 0; i < collection.length; i ++) {
    var flag = true;
    var temp = collection[i];
    for(var j = 0; j < r.length; j ++) {
      if(temp === r[j]) {
        flag = false;
        break;
      }
    }
    if(flag) {
      r.push(temp);
    }
  }
  return r;
}

module.exports = choose_no_repeat_number;
