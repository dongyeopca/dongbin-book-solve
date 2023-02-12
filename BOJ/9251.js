let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let lcs1 = input.shift();
let lcs2 = input[0];
let dp = Array.from(Array(lcs1.length + 1), () => new Array(lcs2.length + 1).fill(0));

console.log(lcs1, lcs2);
for (let i = 0; i < lcs1.length; i++) {
  for (let j = 0; j < lcs2.length; j++) {
    if (lcs1[i] == lcs2[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
    } else {
      dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
}
console.log(dp[lcs1.length][lcs2.length]);
