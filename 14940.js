let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");
let [n, m] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
let graph = input.map((e) => e.split(" ").map((e) => Number(e)));
let target;
for (let i = 0; i < n; i++) {
  if (graph[i].indexOf(2) != -1) {
    target = [i, graph[i].indexOf(2)];
    break;
  }
}
let answer;

answer = bfs(target[0], target[1]);

function bfs(startx, starty) {
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, -1, 1];
  let visited = Array.from(Array(n), () => new Array(m).fill(-1));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] == 0) {
        visited[i][j] = 0;
      }
    }
  }
  visited[startx][starty] = 0;
  let q = [[startx, starty]];
  while (q.length > 0) {
    let [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        -1 < nx &&
        nx < n &&
        -1 < ny &&
        ny < m &&
        graph[nx][ny] != 0 &&
        visited[nx][ny] == -1
      ) {
        visited[nx][ny] = visited[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
  return visited;
}

for (const line of answer) {
  console.log(...line);
}
