var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
var arr = text.split(',')
var tampung = []
for(var i = 0; i < arr.length; i++){
  var a = arr[i].split(':')
  tampung.push(a)

}
console.log(tampung)