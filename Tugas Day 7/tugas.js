//soal 1

var flag = 0;
var pangkat = 5;
var jumlah = 1;

while(flag < 5) {
  jumlah *= pangkat
  flag++
  console.log(jumlah)
}
///--------------------------------------------------------------
//soal 2

///genap
for(var i = 0; i <= 100; i += 2) {
  console.log(i)
}

///ganjil
for(var i = 1; i <= 100; i += 2) {
  console.log(i)
}
///--------------------------------------------------------------
//soal 3

for(var i = 1; i <= 100; i++) {
  var hasil = i %2 == 0 ? i +' genap ' : i +' ganjil '
  console.log(hasil)
}
//--------------------------------------------------------------
//soal 4

for(var i = 1; i <= 10; i++) {
  if(i == 7) {
     break;
  }
  else{
    console.log(i)
  }
}
//--------------------------------------------------------------
//soal 5

for(var i = 1; i <= 10; i++) {
  if(i == 2 || i == 8) {
     continue;
  }
  else{
    console.log(i)
  }
}