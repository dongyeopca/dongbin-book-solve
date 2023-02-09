const { BADFLAGS } = require('dns');
let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let [n, m] = input.shift().split(' ').map(Number);
let board = input.map((e) => e.split(' ').map((e) => (e == '0' ? (e = 0) : (e = 2))));

//2변이상 외부와 접하면 녹음 한시간후에
const recover = (board) => {
  board = board.map((e) => e.map((a) => (a != 0 ? (a = 2) : (a = 0))));
  return board;
};

const bfs = (x, y) => {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  let q = [[x, y]];
  visited[x][y] = 1;
  let cheese_exist = false;
  let temp = [];
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (-1 < nx && nx < n && -1 < ny && ny < m && !visited[nx][ny]) {
        if (board[nx][ny] != 0) {
          cheese_exist = true;
          //치즈를 만나면
          if (board[nx][ny] == 2) {
            board[nx][ny] -= 1;
          } else if (board[nx][ny] == 1) {
            board[nx][ny] = 0;
            temp.push([nx, ny]);
            visited[nx][ny] = 1;
          }
        } else {
          q.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }
  }
  board = recover(board);
  return cheese_exist;
};
let answer = 0;
const Solution = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 0) {
        if (bfs(i, j)) {
          answer += 1;
          continue;
        }
        return;
      }
    }
  }
};
Solution();
console.log(answer);
