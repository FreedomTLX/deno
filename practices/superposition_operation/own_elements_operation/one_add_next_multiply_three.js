'use strict';
function one_add_next_multiply_three(collection){
  var a =[];
  for(var i = 0; i < collection.length; i++ ){

    if(i+1==collection.length) break;
    a.push((collection[i]+collection[i+1])*3);
  }
  return a;
}
module.exports = one_add_next_multiply_three;
