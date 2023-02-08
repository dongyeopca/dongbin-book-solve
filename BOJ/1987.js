let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let [r, c] = input.shift().split(' ').map(Number);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let alphabet = new Array(26).fill(0);
// let moved = {};
alphabet[input[0][0].charCodeAt() - 65] = 1;
//말은 상하좌우로 움직일수있음,새로 이동한 알파벳은 한번만 갈수있음
let answer = 1;
const dfs = (x, y, count) => {
  answer = Math.max(count, answer);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (-1 < nx && nx < r && -1 < ny && ny < c && !alphabet[input[nx][ny].charCodeAt() - 65]) {
      alphabet[input[nx][ny].charCodeAt() - 65] = 1;
      dfs(nx, ny, count + 1);
      alphabet[input[nx][ny].charCodeAt() - 65] = 0;
    }
  }
};
dfs(0, 0, 1);
console.log(answer);
