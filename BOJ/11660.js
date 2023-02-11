let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let [n, m] = input.shift().split(' ').map(Number);
console.log(n, m);
const board = input.slice(0, n).map((e) => e.split(' ').map(Number));
const find = input.slice(n).map((e) => e.split(' ').map(Number));


// 1 3 5
// 3 8