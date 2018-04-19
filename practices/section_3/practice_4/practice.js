function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  /*将"d-5"找出*/
  for(let i = 0; i < collection_a.length; i++) {
    var c = collection_a[i].split("");
    if (c.length == 3) {
      collection_a.splice(i, 1, c[0]);/*替换，将"d-5替换为d"*/
      for (let j = 1; j < Number(c[2]); j++) {
        collection_a.splice(i, 0, c[0]);/*在数组中添加d*/
      }
    }
  }

  var a = [];
  var b = [];
  for(var x = 0; x < collection_a.length; x++){
    if(!a[collection_a[x]]){
      a[collection_a[x]]={};
      a[collection_a[x]].key = collection_a[x];
      a[collection_a[x]].count = 1;
    }else{
      a[collection_a[x]].count++;
    }
  }
  for(let j in a){
    b.push(a[j]);
  }

  for(let i = 0; i <object_b.value.length; i++){
    for(let j =0; j < b.length; j++){
      if(object_b.value[i]==b[j].key && b[j].count >=3){
        b[j].count = b[j].count - parseInt(b[j].count/3);
      }
    }
  }
  return b;

}

module.exports = create_updated_collection;
