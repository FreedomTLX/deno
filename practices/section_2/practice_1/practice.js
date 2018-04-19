function count_same_elements(collection) {
  //在这里写入代码
  var a = [];
  var b = [];
  for(var i = 0; i < collection.length; i++){
    if(!a[collection[i]]){
      a[collection[i]]={};
      a[collection[i]].key = collection[i];
      a[collection[i]].count = 1;
    }else{
      a[collection[i]].count++;
    }
  }
  for(var j in a){
    b.push(a[j]);
  }
  return b;
}

module.exports = count_same_elements;
