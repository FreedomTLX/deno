function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var flatten = require('array-flatten');
  var a = flatten(collection_b);
  var b=[];
  for(var i = 0; i < collection_a.length; i++ ){
    for(var j = 0; j < a.length; j++){
      if(collection_a[i] == a[j]){
        b.push(collection_a[i]);
      }
    }
  }
  return b;
}

module.exports = collect_same_elements;
