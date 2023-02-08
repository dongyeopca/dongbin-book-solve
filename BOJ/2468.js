let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let n = parseInt(input.shift());
let board = input.map((e) => e.split(' ').map(Number));
//가능한 강수량은 2부터 99까지
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let answer = 0;
//bfs
const copy_board = (board) => {
  let copy = board.map((e) => [...e]);
  return copy;
};
const dfs = (x, y, board, depth) => {
  board[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny] > depth) {
      board;
      dfs(nx, ny, board, depth);
    }
  }
};
for (let depth = 0; depth <= 100; depth++) {
  let copy = copy_board(board);
  let temp = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (copy[i][j] > depth) {
        temp += 1;
        dfs(i, j, copy, depth);
      }
    }
  }
  answer = Math.max(temp, answer);
}
console.log(answer);
// const bfs = (x, y, depth, board) => {
//   let q = [[x, y]];
//   board[x][y] = depth;
//   while (q.length) {
//     let [x, y] = q.shift();
//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];
//       if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny] > depth) {
//         board[nx][ny] = depth;
//         q.push([nx, ny]);
//       }
//     }
//   }
// };

// for (let depth = 0; depth < 101; depth++) {
//   let temp = 0;
//   let copy = copy_board(board);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (copy[i][j] > depth) {
//         bfs(i, j, depth, copy);
//         temp += 1;
//       }
//     }
//   }
//   answer = Math.max(answer, temp);
// }
// console.log(answer);
