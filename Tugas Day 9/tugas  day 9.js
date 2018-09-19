///soal 1

function iteration(min,max){
  var arr = []
  for(var i = min; i <= max; i++){
    arr.push(i)
  } 
  return arr
}
console.log(iteration(2,10))


///soal 2

function iteration(min,max){
  var arr = []
  for(var i = min; i <= max; i++){
    var hasil = i %2 === 0 ? i + " = genap " : i + " = ganjil ";
    arr.push(hasil)
  } 
  return arr
}
console.log(iteration(3,7))

///soal 3

function popLastString(arr) {
  var lastItem = arr[arr.length -1]
  if(typeof lastItem === "string"){
    arr.pop()
  } 
  return arr
}
  
console.log(popLastString([1,2,3,"halo"]))

///soal 4

function shiftFirstString(arr) {
  var firstItem = arr[0]
  if(typeof firstItem === "string"){
    arr.shift()
  } 
  return arr
}
  
console.log(shiftFirstString(["fox",1,2,3]))

///soal 5

function unshiftFoxIfZero(arr) {
  var i = arr[0]
  if (i === 0){
    arr.unshift('fox')
  }
  return arr
} 
console.log(unshiftFoxIfZero([0,1,2,3,]))

///soal 6

function sortNum(x) {
  var arr = []
  for(var i = x; i >= 0; i--) {
    var angkaRandom = Math.floor(Math.random()*100) + 1
    arr.push(angkaRandom)
  }
  arr.sort((a,b) => a - b)
  return arr
}
console.log(sortNum(10))
