let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString();
let [n, k] = input.split(" ").map(Number);
let dp = [];
for (let i = 0; i <= n; i++) {
  dp.push(i);
}
for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] * i) % 1000000007;
}

function power(a, b) {
  if (b == 0) {
    return 1;
  } else {
    if (b % 2 === 0) {
      return power(a, Math.floor(b / 2) ** 2) % 1000000007;
    } else {
      return power(a, Math.floor(b / 2) ** 2 * a) % 1000000007;
    }
  }
}
console.log(dp[n] / power(dp[k] * dp[n - k], 1000000005));
