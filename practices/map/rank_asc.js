'use strict';
var rank_asc = function(collection){
  var x=collection;
  x.sort(function (a,b) {
    return b-a;
  })
  return x;
};

module.exports = rank_asc;
