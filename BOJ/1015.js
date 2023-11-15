let fs = require("fs");
let dev = true;
let input = fs
  .readFileSync(dev ? "test.txt" : "./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let answer = "";
let sorted = [...arr].sort((a, b) => a - b);
const checkList = [];
arr.forEach((value) => {
  let finded = sorted.findIndex((element, index) => {
    if (element == value && !checkList.includes(index)) return true;
  });
  checkList.push(finded);
  answer += finded + " ";
});
console.log(answer);
