//soal 1

function removeSpaces(text){
  var a = text.split(" ")
  return a.join("")
}
console.log(removeSpaces("lorem ipsum dollar sit amet"))


///for loop
function removeSpaces(text){
  var a = text.split("")
  var x = ""
  for(var i = 0; i < a.length; i++){
    if(a[i] === " "){
      a[i] = x;
    }
  }
  return a.join("")
}
console.log(removeSpaces("lorem ipsum dollar sit amet"))
//---------------------------------------------------------------------------------------------------------------------
//soal 2
function reverseText(text){
  var a = text.split("").reverse().join("")
  return a
}
console.log(reverseText("lorem ipsum dollar sit amet"))

///for loop
function reverseText(text){
  var a = text.split("")
  for(var i = 0; i < a.length; i++){
    a.reverse()
  }
  return a.join("")
}
console.log(reverseText("lorem ipsum dollar sit amet"))

//---------------------------------------------------------------------------------------------------------------------
//soal 3
function updateVowels(text){
 var str = text,
 a  = str.replace(/a/g,'b').replace(/i/g,'j').replace(/u/g,'v').replace(/e/g,'f').replace(/o/g,'p');
 return a
}
console.log(updateVowels("lorem ipsum dollar sit amet"))