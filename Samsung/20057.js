let fs = require("fs");
let input = fs
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
let n = input.shift()[0];
let start = parseInt(n / 2);
console.log(start);
