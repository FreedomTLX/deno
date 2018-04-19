'use strict';
var single_element = function(collection){
  var a = [];
  for(var i = 0; i < collection.length; i++){
    if(i%2 != 0 ){
      if(collection[i]%10 != parseInt(collection[i]/10)){
        a.push(collection[i]);
      }
    }
  }
  var b = [];
  for(var x = 0; x < a.length; x++) {
    for(var y = x+1; y < a.length; y++){
      if (a[x] == a[y]) {
        b.push(a[x]);
        b.push(a[y]);

        break;
      }
    }

  }
  Array.prototype.diff = function (a) {
    return this.filter(function (j) { return b.indexOf(j) < 0;

    });
  }
  return a.diff(b);
};
module.exports = single_element;
