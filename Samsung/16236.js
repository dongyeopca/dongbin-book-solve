let fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
let n = input.shift()[0];
let size = 2;
let exp = 2;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let stack = [];
let answer = 0;
//먹을수있는게 없으면 엄마 콜
//먹을수있는 물고기가 여러마리면 가까운곳부터
//가까운 곳이 여러곳이라면 가장 위, 가장 위가 여러마리라면 가장 왼쪽
//가까운 순으로 정렬, 컬럼 순으로 정렬, 로우 순으로 정렬
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] == 9) {
      bfs(i, j);
      input[i][j] = 0;
    }
  }
}
//한번 전체 탐색 하며 정렬
//현재 위치 변경
//반복
//
function bfs(i, j) {
  stack = [];
  let visited = Array.from(Array(n), () => Array(n).fill(0));
  visited[i][j] = 1;
  let q = [[i, j, 0]];
  while (q.length > 0) {
    let [x, y, distance] = q.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        -1 < nx &&
        nx < n &&
        -1 < ny &&
        ny < n &&
        visited[nx][ny] == 0 &&
        input[nx][ny] <= size
      ) {
        visited[nx][ny] = 1;
        q.push([nx, ny, distance + 1]);
        if (input[nx][ny] != 0 && input[nx][ny] < size) {
          stack.push([nx, ny, distance + 1]);
        }
      }
    }
  }
}

while (stack.length != 0) {
  stack.sort((a, b) => {
    if (a[2] == b[2]) {
      if (a[0] == b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    } else {
      return a[2] - b[2];
    }
  });
  let [sharkx, sharky, distance] = stack.shift();
  input[sharkx][sharky] = 0; //물고기 먹음
  answer += distance;
  exp -= 1; //경험치++
  if (exp == 0) {
    size++;
    exp = size;
  }
  bfs(sharkx, sharky);
}

console.log(answer);
