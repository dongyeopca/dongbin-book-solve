let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let n = Number(input.shift());
let arr = input.shift().split(' ').map(Number);
let operator = input.shift().split(' ').map(Number);
let Max_answer = -Infinity;
let Min_answer = Infinity;
const recursion = (cur_value, depth) => {
  if (depth == n) {
    Max_answer = Math.max(Max_answer, cur_value);
    Min_answer = Math.min(Min_answer, cur_value);
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (operator[i]) {
      operator[i] -= 1;
      switch (i) {
        case 0:
          recursion(cur_value + arr[depth], depth + 1);
          break;
        case 1:
          recursion(cur_value - arr[depth], depth + 1);
          break;
        case 2:
          recursion(cur_value * arr[depth], depth + 1);
          break;
        case 3:
          recursion(Math.trunc(cur_value / arr[depth]), depth + 1);
          break;
      }
      operator[i] += 1;
    }
  }
};
recursion(arr[0], 1);
console.log(parseInt(Max_answer));
console.log(parseInt(Min_answer));
//-0 을 주의하자.
