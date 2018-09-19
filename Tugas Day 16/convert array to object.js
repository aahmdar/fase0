//soal 2

function convert (data) {
  var obj = []
  for(var i = 0; i < data.length; i++){
    obj.push({
      id: data[i][0],
      firstName: data[i][1],
      lastName: data[i][2],
      email: data[i][3]
    })
  }
  return obj
}

function convert2 (data) {
  var arr = [] ;
  for(var i = 0; i < data.length; i++){
    var obj = {}
    obj.id = data[i][0]
    obj.firstName = data[i][1]
    obj.lastName = data[i][2]
    obj.email = data[i][3]
    arr.push(obj)
  }
  return arr
}



// TEST CASES
console.log(convert2([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

console.log(convert2([]));
// []