/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let counter = 0;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        dfs(i, j);
        counter++;
      }
    }
  }

  function dfs(i, j) {
    grid[i][j] = "0";
    for (let k = 0; k < 4; k++) {
      let nx = i + dx[k];
      let ny = j + dy[k];
      if (
        -1 < nx &&
        nx < grid.length &&
        -1 < ny &&
        ny < grid[0].length &&
        grid[nx][ny] == "1"
      ) {
        dfs(nx, ny);
      }
    }
  }
  return counter;
};
