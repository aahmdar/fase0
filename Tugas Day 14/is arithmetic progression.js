function isArithmeticProgression (numbers) {
  var a = numbers,
      beda = [],
      hasil = 0
      
  if(a[1] > a[0]){
    for(var i = 0; i < a.length-1 ; i++){
      beda.push(a[i+1] - a[i])
      if(beda[i] === beda[i-1] && beda.length > 0){
        hasil ++
      }  
    }
  }
  return hasil === beda.length-1
}

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false