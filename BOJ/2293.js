let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().split('\n');
let [n, k] = input.shift().split(' ').map(Number);
const coins = input.map(Number);
const dp = new Array(k + 1).fill(0);
dp[0] = 1;
for (const coin of coins) {
  for (let j = 1; j < k + 1; j++) {
    if (j - coin >= 0) {
      dp[j] += dp[j - coin];
    }
  }
}
console.log(dp[k]);
