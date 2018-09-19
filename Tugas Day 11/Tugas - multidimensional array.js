//Tugas Day 11

//-------------soal 1----------------

function contoh(a,b){
  var arr1 = []
  var z = 1
  for(var i = 1; i <= a; i++){
    var x = []
    arr1.push(x)
    for(var j = 1; j <= b; j++){     
     x.push(z)
     z++
    }
    
  }
  return arr1
}

console.log(contoh(4,3))
console.log(contoh(2,4))
console.log(contoh(3,2))
console.log(contoh(5,1))

