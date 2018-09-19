function threeStepsAB (text) {
  var a = text,
      hasil = a.search(/(a...b)|(b...a)/g)
  if(hasil !== -1) return true;
  if(hasil == -1) return false;
}

// TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false