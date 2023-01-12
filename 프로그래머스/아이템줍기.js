function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  let boardMaxY = Math.max(...rectangle.map((e) => e[3]));
  let boardMaxX = Math.max(...rectangle.map((e) => e[2]));
  const map = Array.from(Array((boardMaxY + 1) * 2), (e) => new Array((boardMaxX + 1) * 2).fill('*'));
  [characterX, characterY, itemX, itemY] = [characterX, characterY, itemX, itemY].map((e) => e * 2);
  //외곽선
  rectangle.forEach((e) => {
    e = e.map((t) => t * 2);
    for (let y = e[1]; y <= e[3]; y++) {
      for (let x = e[0]; x <= e[2]; x++) {
        if (e[0] < x && x < e[2] && e[1] < y && y < e[3]) {
          map[y][x] = 0;
        } else if (map[y][x] != 0) {
          map[y][x] = 1;
        }
      }
    }
  });
  //bfs탐색
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  const q = [[characterX, characterY]];
  const visited = Array.from(Array((boardMaxY + 1) * 2), (e) => new Array((boardMaxX + 1) * 2).fill(1));
  while (q.length > 0) {
    let [x, y] = q.shift();
    if (x == itemX && y == itemY) {
      return Math.floor(visited[y][x] / 2);
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (map[ny][nx] == 1 && visited[ny][nx] == 1) {
        visited[ny][nx] = visited[y][x] + 1;
        q.push([nx, ny]);
      }
    }
  }
}

// 1. 외곽선의 보드를 그려야한다.
// 2. bfs혹은 dfs 탐색
