/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];
  const n = image.length;
  const m = image[0].length;
  const board = Array.from(Array(n), () => Array(m).fill(false));
  const bfs = (sr, sc, target) => {
    if (target != image[sr][sc]) {
      let queue = [[sr, sc]];
      while (queue.length != 0) {
        const [x, y] = queue.shift();
        board[x][y] = true;
        for (let i = 0; i < 4; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];
          if (
            -1 < nx &&
            nx < n &&
            -1 < ny &&
            ny < m &&
            !board[nx][ny] &&
            image[nx][ny] == image[x][y]
          ) {
            queue.push([nx, ny]);
          }
        }
      }
    } else {
      return;
    }
  };
  bfs(sr, sc, color);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j]) {
        image[i][j] = color;
      }
    }
  }
  return image;
};
