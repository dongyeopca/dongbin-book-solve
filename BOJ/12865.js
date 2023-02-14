let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let [n, m] = input.shift().split(' ').map(Number);
let things = [];
let dp = new Array(m + 1).fill(0);
while (input.length) {
  things.push(input.shift().split(' ').map(Number));
}

for (const item of things) {
  const [weight, value] = item;
  for (let i = m; i >= weight; i--) {
    dp[i] = Math.max(dp[i], dp[i - weight] + value);
  }
}
console.log(Math.max(...dp));
