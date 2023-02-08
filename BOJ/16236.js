let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let n = parseInt(input.shift());
let board = input.map((e) => e.split(' ').map(Number));
let dx = [-1, 0, 0, 1]; //위 좌 우 아래 순으로 탐색
let dy = [0, -1, 1, 0];
//더이상 먹을수 없으면 엄마 콜
// 같은 거리에 있는게 많다면 가장위,가장 왼쪽부터 먹는다. <= 탐색순서는 상 좌 순
//자기 크기만큼 먹으면 커짐
let shark_size = 2;
let exp = 0;
let time = 0;
let g_cur_x;
let g_cur_y;
//상어 최초위치 갱신
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] == 9) {
      board[i][j] = 0;
      g_cur_x = i;
      g_cur_y = j;
    }
  }
}
//맵 복제
// const copy_board = (board) => board.map((e) => [...e]);
//상어 이동 함수
const bfs = (cur_x, cur_y) => {
  let q = [[cur_x, cur_y, 0]];
  let visited = Array.from({ length: n }, () => new Array(n).fill(0));
  visited[cur_x][cur_y] = 1;
  let temp = [];
  while (q.length) {
    let [x, y, distance] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny] <= shark_size && visited[nx][ny] == 0) {
        visited[nx][ny] = 1;
        q.push([nx, ny, distance + 1]);
        if (board[nx][ny] != 0 && board[nx][ny] < shark_size) {
          //잡아먹을수있는애
          temp.push([nx, ny, distance + 1]);
        }
      }
    }
  }
  if (temp.length) {
    console.log(temp);
    temp.sort((a, b) => {
      if (a[2] == b[2]) {
        if (a[0] == b[0]) {
          return a[1] - b[1];
        }
        return a[0] - b[0];
      }
      return a[2] - b[2];
    });
    exp += 1;
    time += temp[0][2];
    g_cur_x = temp[0][0];
    g_cur_y = temp[0][1];
    return true;
  }
  return false;
};

while (bfs(g_cur_x, g_cur_y)) {
  board[g_cur_x][g_cur_y] = 0; //먹은 물고기자리
  if (exp == shark_size) {
    shark_size += 1;
    exp = 0;
  }
}
console.log(time);
