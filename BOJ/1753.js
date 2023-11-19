let fs = require('fs');
let dev = true;
let input = fs
  .readFileSync(dev ? 'test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');
let [v, e] = input.shift().split(' ').map(Number);
let s = Number(input.shift());
input = input.map((e) => e.split(' ').map(Number));
let board = Array.from({ length: v + 1 }, () => new Array());
input.forEach((e) => {
  let [start, end, w] = e;
  board[start].push([end, w]);
});

let dp = new Array(v + 1).fill(Infinity);
const dijstra = (s) => {
  let q = [[0, s]];
  dp[s] = 0;
  while (q.length) {
    let [distance, node] = q.shift();
    if (dp[node] < distance) continue;
    for (const next of board[node]) {
      let cost = distance + next[1];
      if (cost < dp[next[0]]) {
        dp[next[0]] = cost;
        q.push([cost, next[0]]);
        q.soft((a, b) => a[0] - b[0]);
      }
    }
  }
};

// const dp = new Array(v + 1).fill(Infinity);

// const dijkstra = (s) => {
//   let q = [];
//   q.push([0, s]);
//   dp[s] = 0;
//   while (q.length > 0) {
//     let [distance, cur] = q.shift();
//     if (dp[cur] < distance) continue;
//     for (const next of board[cur]) {
//       let cost = distance + next[1];
//       if (dp[next[0]] > cost) {
//         dp[next[0]] = cost;
//         q.push([cost, next[0]]);
//         q.sort((a, b) => a[0] - b[0]);
//       }
//     }
//   }
// };
// dijkstra(s);
// for (let i = 1; i < v + 1; i++) {
//   dp[i] == Infinity ? console.log('INF') : console.log(dp[i]);
// }
