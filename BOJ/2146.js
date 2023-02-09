let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let n = parseInt(input.shift());
let board = input.map((e) => e.split(' ').map(Number));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let answer = [];
let islands = [];
let i_number = 1;
const bfs = (x, y, i_number) => {
  let temp = [[x, y, 0]];
  let q = [[x, y]];
  board[x][y] = i_number;
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny] == 1) {
        board[nx][ny] = i_number;
        q.push([nx, ny]);
        temp.push([nx, ny, 0]);
      }
    }
  }
  return temp;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] == 1) {
      islands.push(bfs(i, j, ++i_number));
    }
  }
}

const search = (q, number) => {
  let temp = [];
  let visited = Array.from({ length: n }, () => new Array(n).fill(0));
  visited[q[0][0]][q[0][1]] = 1;
  while (q.length) {
    let [x, y, distance] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny] != number && visited[nx][ny] == 0) {
        visited[nx][ny] = 1;
        if (board[nx][ny] != 0 && board[nx][ny] != number) {
          //다른 육지이면
          temp.push(distance + 1);
        } else {
          q.push([nx, ny, distance + 1]);
        }
      }
    }
  }
  answer.push(Math.min(...temp));
};
islands.forEach((e, index) => {
  search(e, index + 2);
});
console.log(Math.min(...answer) - 1);
