//bfs/dfs

function solution(n, computers) {
  var answer = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  const dfs = (x, y) => {
    console.log(computers);
    computers[x][y] = 0;
    for (let k = 0; k < 4; k++) {
      console.log(k);
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (-1 < nx && nx < n && -1 < ny && ny < n && computers[nx][ny] == 1) {
        dfs(nx, ny);
      }
    }
    return;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; i < n; j++) {
      if (computers[i][j] == 1) {
        dfs(i, j);
        answer++;
      }
    }
  }
  return answer;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
