'use strict';
function map_to_even(collection){
  var a = collection.map(function (i) {
    return i*2;
  });
  return a;
}
module.exports = map_to_even;
