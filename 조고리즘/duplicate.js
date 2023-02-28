let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input.shift());
input = input.map(Number).sort((a, b) => a - b);
let stack = [];
for (let i = 0; i < n + 2; i++) {
  if (stack.length) {
    if (stack[stack.length - 1] == input[i]) {
      console.log(input[i]);
    } else {
      stack.push(input[i]);
    }
    continue;
  }
  stack.push(input[i]);
}
