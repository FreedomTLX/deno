'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  var b = 0;
  var a = collection.map(function (i) {
    b=b+i*3+2;
  });
  return b;
}

module.exports = hybrid_operation;

