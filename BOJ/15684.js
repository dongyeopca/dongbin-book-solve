let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let [n, m, h] = input.shift().split(' ').map(Number);
let board = Array.from({ length: h + 1 }, () => new Array(n + 1).fill(0));
//행이 가로선 열이 세로선
for (let i = 0; i < m; i++) {
  let [a, b] = input.shift().split(' ').map(Number);
  //b선 세로선과 b+1번 세로선을 a번 점선 위치에 연결했다는으미ㅣ
  board[a][b] = 1;
}
let answer = Infinity;

const check = () => {
  for (let i = 1; i < n + 1; i++) {
    //세로선
    let start = i;
    for (let j = 1; j < h + 1; j++) {
      if (board[j][start]) {
        start += 1;
      } else if (board[j][start - 1]) {
        start -= 1;
      }
    }
    if (start != i) {
      return false;
    }
  }
  return true;
};
//n이 세로선 m이 가로선의 개수
const setting = (cur, count, min_count) => {
  if (count == min_count) {
    if (check()) {
      answer = count;
    }
    return;
  }
  for (let i = cur; i < h + 1; i++) {
    //높이
    for (let j = 1; j < n; j++) {
      //열
      if (!board[i][j - 1] && !board[i][j] && !board[i][j + 1]) {
        board[i][j] = 1;
        setting(i, count + 1, min_count);
        board[i][j] = 0;
      }
    }
  }
};
const solution = () => {
  for (let i = 0; i < 4; i++) {
    setting(1, 0, i);
    if (answer != Infinity) {
      return answer;
    }
  }
  return -1;
};
console.log(solution());
