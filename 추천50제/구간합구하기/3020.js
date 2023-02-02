const fs = require('fs');
let test = true;
let input = fs
  .readFileSync(test ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [n, h] = input.shift().split(' ').map(Number);
// const cave = Array.from(Array(h), (e) => new Array(n).fill(0));
// //시작은 무조건 석순
// //그다음부터는 종유석 석순 순으로 반복
// for (let i = 0; i < n; i++) {
//   if (i % 2 == 0) {
//     for (let j = 0; j < input[i]; j++) {
//       cave[j][i] = 1;
//     }
//   } else {
//     for (let j = h - 1; j >= h - input[i]; j--) {
//       cave[j][i] = 1;
//     }
//   }
// }
// let answer = [Infinity, 0];
// cave.forEach((e, index) => {
//   let sum = e.reduce((a, c) => {
//     return a + c;
//   }, 0);
//   if (sum < answer[0]) {
//     answer[0] = sum;
//     answer[1] = 1;
//   } else if (sum == answer[0]) {
//     answer[1] += 1;
//   }
// });
// console.log(answer.join(' '));
const up = new Array(h + 2).fill(0);
const down = new Array(h + 2).fill(0);
const result = new Array(h + 2).fill(0);
for (let i = 0; i < n; i++) {
  let height = input[i];
  if (i % 2 == 0) {
    down[height + 1] += 1;
  } else {
    up[h - height] += 1;
  }
}
