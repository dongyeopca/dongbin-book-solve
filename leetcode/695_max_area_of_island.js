/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let n = grid.length;
  let m = grid[0].length;
  let answer = [];
  for (let k = 0; k < n; k++) {
    for (let j = 0; j < m; j++) {
      if (grid[k][j] == 1) {
        answer.push(1);
        dfs(k, j);
      }
    }
  }
  if (answer.length != 0) {
    return Math.max(...answer);
  } else {
    return 0;
  }
  function dfs(x, y) {
    grid[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (-1 < nx && nx < n && -1 < ny && ny < m && grid[nx][ny] != 0) {
        answer[answer.length - 1] += 1;
        dfs(nx, ny);
      }
    }
  }
};
