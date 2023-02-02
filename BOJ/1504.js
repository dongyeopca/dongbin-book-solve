let fs = require('fs');
let dev = true;
let input = fs
  .readFileSync(dev ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');
let [n, e] = input.shift().split(' ').map(Number);
let [v1, v2] = input.pop().split(' ').map(Number);
input = input.map((e) => e.split(' ').map(Number));
let connect = Array.from({ length: n + 1 }, () => new Array());

for (const [s, e, c] of input) {
  connect[s].push([e, c]);
  connect[e].push([s, c]);
}

const dijkstra = (s, e) => {
  let dp = new Array(n + 1).fill(Infinity);
  dp[s] = 0;
  let q = [[0, s]];
  while (q.length) {
    let [distance, node] = q.shift();
    if (distance > dp[node]) {
      continue;
    }
    for (const [next, weight] of connect[node]) {
      let cost = distance + weight;
      if (cost < dp[next]) {
        dp[next] = cost;
        q.push([cost, node]);
        q.sort((a, b) => a[0] - b[0]);
      }
    }
  }
  return dp[e];
};
let first = dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, n);
let second = dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, n);
let answer = Math.min(first, second);
if (answer >= Infinity) {
  console.log(-1);
} else {
  console.log(answer);
}
