const fs = require('fs');
const test = true;
const input = fs
  .readFileSync(test ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const m = input[2];
const answer = [];
const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  dp[i][i] = 1;
}
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= n - i; j++) {
    if (arr[j - 1] == arr[j + i - 1]) {
      if ((i == 1) | (dp[j + 1][j + i - 1] == 1)) {
        dp[j][j + i] = 1;
      }
    }
  }
}

for (let i = 0; i < m; i++) {
  let [start, end] = input[3 + i].split(' ').map(Number);
  answer.push(dp[start][end]);
}
console.log(answer.join('\n'));
// function checker(arr, start, end) {
//   while (start <= end) {
//     if (arr[start - 1] == arr[end - 1]) {
//       start++;
//       end--;
//       continue;
//     }
//     return false;
//   }
//   return true;
// }
