let fs = require('fs');
let test = true;
let input = fs
  .readFileSync(test ? './map.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');
let [r, c] = input.shift().split(' ').map(Number);

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

// 말은 0,0에서 시작
// 이동 할 칸에 적혀있는 알파벳은 지금까지 지나온 모든 칸에 적혀있는 알파벳과 달라야함.
// visited를 사용할필요없음 왜냐? 어짜피 지나온칸의 알파벳은 기록됨

let visited = new Array(26).fill(0);
let answer = 0;
const dfs = function (x, y, cnt) {
  answer = Math.max(answer, cnt);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (-1 < nx && nx < r && -1 < ny && ny < c && !visited[input[nx][ny].charCodeAt() - 65]) {
      visited[input[nx][ny].charCodeAt() - 65] = 1;
      dfs(nx, ny, cnt + 1);
      visited[input[nx][ny].charCodeAt() - 65] = 0;
    }
  }
  return;
};
visited[input[0][0].charCodeAt() - 65] = 1;
dfs(0, 0, 1);
console.log(answer);
