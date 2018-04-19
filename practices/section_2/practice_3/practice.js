function count_same_elements(collection) {
  //在这里写入代码
  for(var i = 0; i < collection.length; i++){
    var c = collection[i].split("");
    if(c.length == 3 || c.length == 4){
      collection.splice(i,1,c[0]);
      for(var j = 1; j < Number(c[2]); j++){
        collection.splice(i,0,c[0]);
      }
      //collection.splice(i,1);
    }else if(c.length == 5){
      collection.splice(i,1,c[0]);
      var e = Number(c[2])*10+Number(c[3]);
      for(var z = 1; z < e; z++){
        collection.splice(i,0,c[0]);
      }
    }
  }
  var a = [];
  var b = [];
  for(var x = 0; x < collection.length; x++){
    if(!a[collection[x]]){
      a[collection[x]]={};
      a[collection[x]].name = collection[x];
      a[collection[x]].summary = 1;
    }else{
      a[collection[x]].summary++;
    }
  }
  for(var y in a){
    b.push(a[y]);
  }
  return  b;
  /*var a = "t[10]";
   var c = a.split("[");
   return c;*/

}


module.exports = count_same_elements;
