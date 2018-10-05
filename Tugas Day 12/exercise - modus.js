function mode(numbers) {
   var modes = [], 
       count = [],  
       number = 0, 
       maxIndex = 0;

   for (i = 0; i < numbers.length; i += 1) {
       number = numbers[i];
       count[number] = (count[number] || 0) + 1;
       if (count[number] > maxIndex) {
           maxIndex = count[number];
       }
   }

   for (i in count)
       if (count.hasOwnProperty(i)) {
           if (count[i] === maxIndex) {
               modes.push(Number(i));
           }
       }

   return modes;
}

console.log(mode([ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]))