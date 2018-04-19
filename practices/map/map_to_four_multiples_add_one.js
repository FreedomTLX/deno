'use strict';
var map_to_four_multiples_add_one = function(collection){
  var a = collection.map(function (i) {
    return i*4+1;
  });
  return a;
};

module.exports = map_to_four_multiples_add_one;
