let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let [n, m] = input.shift().split(' ').map(Number);
let board = input.map((e) => e.split('').map(Number));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
let q = [];
q.push([0, 0]);
board[0][0] = 2;
while (q.length) {
  let [x, y] = q.shift();
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (-1 < nx && nx < n && -1 < ny && ny < m && board[nx][ny] == 1) {
      board[nx][ny] = board[x][y] + 1;
      q.push([nx, ny]);
    }
  }
}
console.log(board[n - 1][m - 1] - 1);
