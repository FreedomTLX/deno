'use strict';
var even_asc_odd_desc = function(collection){
  var x = [];
  var y = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2 == 0){
      x.push(collection[i]);
    }else {
      y.push(collection[i]);
    }
  }
  y.sort(function (a,b) {
    return b-a;
  })
  x.sort(function (a,b) {
    return a-b;
  })
  return x.concat( y );

};
module.exports = even_asc_odd_desc;
