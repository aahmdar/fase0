//longhand

var angka1 = 5, angka2 = 2, angka3 = 8, angka4 = 9, angka5 = 12, angka6 = 18, angka7 = 131;

if (angka5 % 2 === 0 && angka5 % 3 === 0) {
  console.log("HACKFOX");
} else if (angka5 % 3 == 0) {
  console.log("FOX");
} else if (angka5 % 2 == 0) {
  console.log("HACK");
} else {
  console.log("false");
}


//shorthand

var angka1 = 5, angka2 = 2, angka3 = 8, angka4 = 9, angka5 = 12, angka6 = 18, angka7 = 131;
var hasil = angka5 % 2 === 0 && angka5 % 3 === 0 ? "HACKFOX" : angka5 % 3 == 0 ? "FOX" : angka5 % 2 == 0 ? "HACK" : "FALSE" ;

console.log(hasil)