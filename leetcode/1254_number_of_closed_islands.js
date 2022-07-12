/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  //하나라도 벽에 다아있으면 false
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let n = grid.length;
  let m = grid[0].length;
  let answer = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      if (grid[i][j] == 0) {
        if (dfs(i, j)) {
          console.log(i, j);
          answer++;
        }
      }
    }
  }
  return answer;
  function dfs(x, y) {
    let isIsland = true;
    grid[x][y] = 1;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (-1 < nx && nx < n && -1 < ny && ny < m && grid[nx][ny] == 0) {
        if (nx == 0 || nx == n - 1 || ny == 0 || ny == m - 1) {
          isIsland = false;
        }
        isIsland *= dfs(nx, ny);
      }
    }
    return isIsland;
  }
};
