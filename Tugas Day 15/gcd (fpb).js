function gcd (firstNumber, secondNumber) {
  var a = firstNumber,
      b = secondNumber,
      arr = [],
      arr2 = [],
      hasil = 0
  for(var i = 1; i <= a ; i++){
    if(a % i == 0) arr.push(i); 
  }
  for(var j = 1; j <= b; j++){
    if(b % j == 0)arr2.push(j);
  }
  for(var k = 0 ; k < arr.length ; k++){
    for(var l = 0 ; l < arr2.length ; l++){
      if(arr[k] === arr2[l]){
        hasil = arr[k]
      }
    }
  }
  return hasil
} 

// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1
