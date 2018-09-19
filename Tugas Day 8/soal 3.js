///soal ke-3

function perulangan(angkaPertama, angkaKedua) {
 var pangkat = angkaPertama
 var jumlah = 1
  for(var i = angkaKedua; i > 0; i--) {
    jumlah *= pangkat
  } 
  return jumlah
}

  
console.log(perulangan(5,3))
console.log(perulangan(4,3))
console.log(perulangan(2,4))