let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let n = parseInt(input.shift());
//GR은 같은걸로 보이는게 적록색약
let normal = { R: 0, G: 0, B: 0 };
let unnormal = { R: 0, B: 0 };
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

const copy_board = (input) => {
  return input.map((e) => e.split(''));
};
let normal_board = copy_board(input);
let unnormal_board = copy_board(input);
unnormal_board.forEach((e) => {
  e.forEach((a, index, origin) => {
    if (a == 'G') {
      origin[index] = 'R';
    }
  });
});
const dfs = (color, board, x, y) => {
  board[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny] == color) {
      dfs(color, board, nx, ny);
    }
  }
  return 1;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (normal_board[i][j] == 'B') {
      normal['B'] += dfs('B', normal_board, i, j);
    } else if (normal_board[i][j] == 'R') {
      normal['R'] += dfs('R', normal_board, i, j);
    } else if (normal_board[i][j] == 'G') {
      normal['G'] += dfs('G', normal_board, i, j);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (unnormal_board[i][j] == 'B') {
      unnormal['B'] += dfs('B', unnormal_board, i, j);
    } else if (unnormal_board[i][j] == 'R') {
      unnormal['R'] += dfs('R', unnormal_board, i, j);
    }
  }
}

console.log(
  Object.values(normal).reduce((a, c) => a + c),
  Object.values(unnormal).reduce((a, c) => a + c)
);
