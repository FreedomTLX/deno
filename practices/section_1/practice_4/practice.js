function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var a = [];
  for(var y = 0; y <collection_a.length ; y++){

    a.push(collection_a[y].key )

  }
  var flatten = require('array-flatten');
  var x = flatten(object_b.value);
  var b=[];
  for(var i = 0; i < a.length; i++ ){
    for(var j = 0; j < x.length; j++){
      if(a[i] == x[j]){
        b.push(a[i]);
      }
    }
  }
  return b;
}

module.exports = collect_same_elements;
