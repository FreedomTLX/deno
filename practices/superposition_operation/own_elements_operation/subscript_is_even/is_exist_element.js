'use strict';
var is_exist_element = function(collection,element){
  var a = [];
  for(var i = 0; i < collection.length; i++){
    if(i%2==0 ){
      if(collection[i] == element ){
        return true;
      }
    }
  }
  return false;

};
module.exports = is_exist_element;
