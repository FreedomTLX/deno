'use strict';
var even_group_calculate_average = function(collection){
  var a = [];
  var b = [];
  var c = [];
  var x = [];

  for(var i = 0; i < collection.length; i++){
    if((i+1)%2 == 0 && collection[i]%2 == 0){
      if(collection[i].toString().length ==1){
        a.push(collection[i]);
      }else if(collection[i].toString().length ==2){
        b.push(collection[i]);
      }else if(collection[i].toString().length ==3){
        c.push(collection[i]);
      }

    }
  }

  if(a.length == 0 && b.length == 0  && c.length != 0){
    x.push(c.reduce((o,p)=>o+p)/c.length);
    return x;
  }else if(a.length == 0  && b.length == 0 && c.length == 0){
    x.push(0);
    return x;
  }else{
    x.push(a.reduce((o,p)=>o+p)/a.length);
    x.push(b.reduce((o,p)=>o+p)/b.length);
    x.push(c.reduce((o,p)=>o+p)/c.length);
    return x;
  }
};
module.exports = even_group_calculate_average;
