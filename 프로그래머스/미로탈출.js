function solution(maps) {
  var answer = 0;
  let row = maps.length;
  let col = maps[0].length;
  let s, m, e;
  let bfs = (start, type) => {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let visited = Array.from({ length: row }, () => new Array(col).fill(0));
    let [x, y] = start;
    visited[x][y] = 1;
    let q = [[x, y]];
    while (q.length) {
      let [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (-1 < nx && nx < row && -1 < ny && ny < col && !visited[nx][ny] && maps[nx][ny] != 'X') {
          visited[nx][ny] = visited[x][y] + 1;
          if (maps[nx][ny] == type) {
            answer += visited[nx][ny] - 1;
            return true;
          }
          q.push([nx, ny]);
        }
      }
    }
    return false;
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] == 'S') s = [i, j];
      if (maps[i][j] == 'L') m = [i, j];
      if (maps[i][j] == 'E') e = [i, j];
    }
  }
  if (bfs(s, 'L')) {
    if (bfs(m, 'E')) {
      return answer;
    }
    return -1;
  }
  return -1;
}
