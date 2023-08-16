const fs = require('fs');
const test = true;
const input = fs
  .readFileSync(test ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [m, n] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
a.splice(m, a.length - m, ...b);
a.sort((a, b) => a - b);
console.log(a);
