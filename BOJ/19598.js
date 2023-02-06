let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input.shift());
let conferences = input.map((e) => e.split(' ').map(Number));
let answer = 0;
let cnt = 0;
let time_table = [];
conferences.forEach((e) => {
  time_table.push([e[0], 1]);
  time_table.push([e[1], -1]);
});
time_table.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
time_table.forEach((e) => {
  cnt += e[1];
  answer = Math.max(cnt, answer);
});
console.log(answer);
