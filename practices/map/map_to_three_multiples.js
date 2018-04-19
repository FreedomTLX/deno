'use strict';
var map_to_three_multiples = function(collections){
  var a = collections.map(function (i) {
    return i*3;
  });
  return a;

};

module.exports = map_to_three_multiples;
