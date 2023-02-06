let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let n = Number(input.shift());
let board = input.map((e) => e.split('').map(Number));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
const answer = [];
function bfs(x, y) {
  let q = [[x, y]];
  board[x][y] = 0;
  let counter = 1;
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny] != 0) {
        q.push([nx, ny]);
        board[nx][ny] = 0;
        counter += 1;
      }
    }
  }
  return counter;
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] != 0) {
      answer.push(bfs(i, j));
    }
  }
}
console.log(answer.length);
answer.sort((a, b) => a - b);
answer.forEach((e) => console.log(e));
