let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const board = input.map((e) => e.split(' ').map(Number));
let answer = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let combination = (arr, n) => {
  let results = [];
  if (n == 1) return arr.map((e) => [e]);
  arr.forEach((value, index, origin) => {
    let rest = origin.slice(index + 1);
    let combi = combination(rest, n - 1);
    let attach = combi.map((e) => [value, ...e]);
    results.push(...attach);
  });
  return results;
};

//바이러스와 빈영역의 구하기
let wall = [];
let virus = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] == 0) {
      wall.push([i, j]);
    }
    if (board[i][j] == 2) {
      virus.push([i, j]);
    }
  }
}
//바이러스 퍼트리기
function spread(x, y, board) {
  let q = [[x, y]];
  board[x][y] = 2;
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (-1 < nx && nx < n && -1 < ny && ny < m && board[nx][ny] == 0) {
        board[nx][ny] = 2;
        q.push([nx, ny]);
      }
    }
  }
}

let copy = (board) => {
  return board.map((e) => [...e]);
};
//벽 조합 만들기
combination(wall, 3).forEach((e) => {
  let counter = 0;
  let copy_board = copy(board);
  e.forEach((wall) => (copy_board[wall[0]][wall[1]] = 1));
  virus.forEach((vi) => {
    spread(vi[0], vi[1], copy_board);
  });
  copy_board.forEach((e) => {
    counter += e.filter((a) => a == 0).length;
  });
  answer = Math.max(counter, answer);
});

console.log(answer);
