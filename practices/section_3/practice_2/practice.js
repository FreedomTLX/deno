function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(var i = 0; i <object_b.value.length; i++){
    for(var j =0; j < collection_a.length; j++){
      if(object_b.value[i]==collection_a[j].key && collection_a[j].count >=3){
        collection_a[j].count = collection_a[j].count - parseInt(collection_a[j].count/3);
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
