'use strict';
var calculate_median = function(collection) {
  var j = [];
  for (var i = 0; i < collection.length; i++) {
    if (i % 2 == 1) {
      j.push(collection[i]);
    } else {
      j.push(collection[i]);
    }
  }
  return Math.round((j[0]+j[j.length-1])/2);
}

module.exports = calculate_median;
