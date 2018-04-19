'use strict';
var rank_desc = function(collection){
  var x=collection;
  x.sort(function (a,b) {
    return a-b;
  })
  return x;
};

module.exports = rank_desc;
