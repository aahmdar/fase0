function complexConversion (text) {
  var a = text.split(','),
      tmpg1 = a[0],
      tmpg2 = a[1],
    //   tmpg3 = a[2], //ini untuk console.log yg ke-2 
      a1 = tmpg1.split(':'),
      a2 = tmpg2.split(':'),
    //   a3 = tmpg3.split(':'),//ini untuk console.log yg ke-2 
      obj = {}
   obj[a1[0]]=a1[1]
   obj[a2[0]]=a2[1]
//    obj[a3[0]]=a3[1] //ini untuk console.log yg ke-2 
 return obj ;
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }