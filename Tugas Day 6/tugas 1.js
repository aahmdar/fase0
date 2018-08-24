var name = 1;
var age = 17;
var money = 400000;
var uangSisa = 0;
var juice = 50000
var anggur = 300000;

if (name == 2) {
  console.log("anda tidak boleh masuk");
} else if (age >= 17) {
  console.log("anda hanya boleh memesan anggur");
  if (money > anggur) {
    console.log("sisa uang anda : " + (money - anggur))
  } else {
    console.log("uang anda tidak cukup")
  }
} else {
  console.log("anda hanya boleh memesan juice");
  if (money > juice) {
    console.log("sisa uang anda : " + (money - juice))
  } else {
    console.log("uang anda tidak cukup");
  }
}

   