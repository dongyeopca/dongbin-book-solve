let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().split('\n');
let [n, k] = input.shift().split(' ').map(Number);
let coins = input.map(Number);
let dp = new Array(k + 1).fill(Infinity);
dp[0] = 0;
coins.sort((a, b) => a - b);
//동전의 개수가 최소가 되도록 해야함.
//가능한 경우인지 체크
// 갯수 체크
for (const coin of coins) {
  for (let j = coin; j < k + 1; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin] + 1);
  }
}
if (dp[k] == Infinity) {
  console.log(-1);
} else {
  console.log(dp[k]);
}
