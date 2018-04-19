'use strict';

function compute_median(collection) {
  //在这里写入代码
  var x=collection;
  x.sort(function (a,b) {
    return a-b;
  })
  if(collection.length%2==0){
    return (x[collection.length/2-1]+x[collection.length/2])/2;
  }else{
    return (x[(collection.length-1)/2]);
  }
}

module.exports = compute_median;


