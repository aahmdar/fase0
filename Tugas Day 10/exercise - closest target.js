function targetTerdekat(arr) {
  var xo = 0;
  var firstTarget = "";
  for (var i = 0; i < arr.length; i++) {
    if (firstTarget === "x" && arr[i] === "o") return xo;
    if (firstTarget === "o" && arr[i] === "x") return xo;
    if (firstTarget === arr[i]) xo = 0;
    if (arr[i] === "x" || arr[i] === "o") firstTarget = arr[i];
    if (firstTarget !== "") xo++;
  }
  return 0;
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2