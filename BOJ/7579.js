const fs = require("fs");
const test = true;
const input = fs
  .readFileSync(test ? "./test.txt" : "./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let memories = input[1].split(" ").map(Number);
let costs = input[2].split(" ").map(Number);

let sum = costs.reduce((prev, cur) => prev + cur);

let dp = Array(10001).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = sum; j >= costs[i]; j--) {
    dp[j] = Math.max(dp[j], dp[j - costs[i]] + memories[i]);
  }
}

let counter = 0;
while (dp[counter] < m) {
  counter++;
}
console.log(counter);
//dp[cur+prev] = Math.min(dp[cur+prev],memories[cur] + dp[prev])
// 각각의 app은 mi만큼 메모리를 사용하고있음
// 비활성화된 앱을 재실행할 경우 ci의 비용이 든다
// 메모리 사용량이 크고 재실행 비용이 낮을수록 우선대상

// DP
// 0 10 20 30 40 50 60
