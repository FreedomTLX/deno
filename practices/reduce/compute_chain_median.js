'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var ary = collection.split('->').sort(function (a,b) {
    return a - b;
  });
  var lowMiddle = Math.floor((ary.length - 1) / 2);
  var highMiddle = Math.ceil((ary.length - 1) / 2);
  return (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;
}

module.exports = compute_chain_median;
