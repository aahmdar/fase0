///soal ke-2

function perulangan(min, max) {
  for(var i = min; i <= max; i++){
  var hasil = i %2 == 0 ? i +' genap ' : i +' ganjil '
    console.log(hasil)
  }
}

perulangan(2,20)