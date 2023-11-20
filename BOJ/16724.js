const fs = require('fs');
const test = true;
const input = fs
  .readFileSync(test ? './test.txt' : './dev/stdin')
  .toString()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const board = [];
const visited = Array.from({ length: n }, () => new Array(m).fill(0));
let idx = 1;
let counter = 0;
for (let i = 1; i <= n; i++) {
  board.push(input[i].split(''));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j] == 0) {
      dfs(i, j);
    }
  }
}

function dfs(i, j) {
  let nextx, nexty;
  visited[i][j] = idx;
  switch (board[i][j]) {
    case 'D':
      nextx = i + 1;
      nexty = j;
      break;
    case 'L':
      nextx = i;
      nexty = j - 1;
      break;
    case 'R':
      nextx = i;
      nexty = j + 1;
      break;
    case 'U':
      nextx = i - 1;
      nexty = j;
      break;
  }
  if (visited[nextx][nexty] == 0) {
    dfs(nextx, nexty);
  } else {
    if (visited[nextx][nexty] == idx) {
      counter++;
    }
    idx++;
  }
}
console.log(counter);

// 모든 좌표를 탐색해야함. 단 visited된곳은 갈필요없음.
// 사이클이 도는곳이면
