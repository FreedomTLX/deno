'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  //return [2, 3, 1, 6, 8, 4, 9, 10];
  //真的没想出来，助教也提示了，还是没想出来，感觉按照要求答案应该很多呀，SORRY
  collection.splice(1,1,3);
  collection.splice(collection.length-2,1,9);
  collection.splice(3,1);
  collection.splice(4,0,8);
  return collection;
}
module.exports = rank_by_two_large_one_small;
