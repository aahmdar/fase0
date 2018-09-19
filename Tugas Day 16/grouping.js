function grouping (scores) {
  var obj = {
    pass : [],
    fail : []
  },
      cur = 0
  for(var i = 0; i < scores.length; i++){
    cur = scores[i]
    if(cur < 75) obj.fail.push(cur);
    if(cur > 75) obj.pass.push(cur);
  }
  return obj
}

console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
// { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

console.log(grouping([]));
// { pass: [], fail: [] } 