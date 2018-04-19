'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var max=collection.reduce(function (x,y) {
    return x>y? x:y
  });
  return max;
}

module.exports = collect_max_number;
