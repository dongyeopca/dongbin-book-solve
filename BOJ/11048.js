let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().split('\n');
let [n, m] = input.shift().split(' ').map(Number);
let board = input.map((e) => e.split(' ').map(Number));
//n,m사이즈의 미로에 갇힘
let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
// let q = [[0, 0]];
// dp[0][0] = board[0][0];
// let dx = [0, 1, 1];
// let dy = [1, 0, 1];
// while (q.length) {
//   let [x, y] = q.shift();
//   for (let i = 0; i < 3; i++) {
//     let nx = x + dx[i];
//     let ny = y + dy[i];
//     if (-1 < nx && nx < n && -1 < ny && ny < m) {
//       dp[nx][ny] = Math.max(dp[nx][ny], dp[x][y] + board[nx][ny]);
//       q.push([nx, ny]);
//     }
//   }
// }
// console.log(dp[n - 1][m - 1]);
for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < m + 1; j++) {
    dp[i][j] = board[i - 1][j - 1] + Math.max(dp[i - 1][j], dp[i][j], dp[i][j - 1]);
  }
}
console.log(dp[n][m]);
