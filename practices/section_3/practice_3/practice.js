function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var a = [];
  var b = [];
  for(let i = 0; i < collection_a.length; i++){
    if(!a[collection_a[i]]){
      a[collection_a[i]]={};
      a[collection_a[i]].key = collection_a[i];
      a[collection_a[i]].count = 1;
    }else{
      a[collection_a[i]].count++;
    }
  }
  for(let j in a){
    b.push(a[j]);
  }
  for(var i = 0; i <object_b.value.length; i++){
    for(var j =0; j < b.length; j++){
      if(object_b.value[i]==b[j].key && b[j].count >=3){
        b[j].count = b[j].count - parseInt(b[j].count/3);
      }
    }
  }
  return b;
}

module.exports = create_updated_collection;
