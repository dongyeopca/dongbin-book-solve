let fs = require('fs');
let n = Number(fs.readFileSync('./test.txt').toString());
let dp = new Array(n + 1).fill(0);
let answer = [];
dp[2] = 1;
for (let i = 3; i < n + 1; i++) {
  if (i % 6 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i / 2] + 1, dp[i - 1] + 1);
  } else if (i % 3 == 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i - 1] + 1);
  } else if (i % 2 == 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i - 1] + 1);
  } else {
    dp[i] = dp[i - 1] + 1;
  }
}
console.log(dp[n]);
