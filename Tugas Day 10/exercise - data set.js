function numberProcessing(arr) {
  var result = "",
    min = 0,
    max = 0,
    mean = 0,
    odds = [],
    evens = [],
    cur = 0,
    total = 0;
  for (var i = 0; i < arr.length; i++) {
    cur = arr[i];
    total += cur;
    if (cur < min) {
      min = cur;
    }
    if (cur > max) {
      max = cur;
    }
    if (i === arr.length - 1) {
      mean = Math.round(total / arr.length);
    }
    if (cur % 2 !== 0) {
      odds.push(cur);
    }
    if (cur % 2 === 0) {
      evens.push(cur);
    }
  }
  return `Min: ${min}, Max: ${max}, Mean: ${mean}, Odds: ${odds.join(
    "-"
  )}, Evens: ${evens.join("-")}`;
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]))