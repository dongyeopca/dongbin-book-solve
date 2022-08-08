let fs = require("fs");
let dev = true;
let testtxt = dev ? "./test.txt" : "/dev/stdin";
let input = fs.readFileSync(testtxt).toString().split("\n");
const [n, m] = input.shift().split(" ");
let board = input.map((e) => e.split(""));
//dfs로 풀수있을듯
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let answer = Infinity;
let rx = 0,
  ry = 0;
let bx = 0,
  by = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] == "R") {
      [rx, ry] = [i, j];
    }
    if (board[i][j] == "B") {
      [bx, by] = [i, j];
    }
  }
}
dfs(rx, ry, bx, by, 0);
if (answer == Infinity) {
  console.log(-1);
} else {
  console.log(answer);
}
function dfs(rx, ry, bx, by, count) {
  if (count > 10) {
    return;
  }
  for (let i = 0; i < 4; i++) {
    let flag = false;
    if (i == 3 || i == 4) {
      if (ry == by) {
        flag = true;
      }
    } else {
      if (rx == bx) {
        flag = true;
      }
    }
    let rlength = 0;
    let blength = 0;
    let rnx = rx + dx[i];
    let rny = ry + dy[i];
    let bnx = bx + dx[i];
    let bny = by + dy[i];
    while (true) {
      rlength++;
      if (board[rnx][rny] == "O") {
        answer = Math.min(answer, count + 1);
        return;
      }
      if (board[rnx][rny] == "#") {
        rnx = rnx - dx[i];
        rny = rny - dy[i];
        rlength--;
        break;
      } else {
        rnx = rnx + dx[i];
        rny = rny + dy[i];
      }
    }
    while (true) {
      blength++;
      if (board[bnx][bny] == "O") {
        return;
      }
      if (board[bnx][bny] == "#") {
        bnx = bnx - dx[i];
        bny = bny - dy[i];
        blength--;
        break;
      } else {
        bnx = bnx + dx[i];
        bny = bny + dy[i];
      }
    }
    if (flag) {
      console.log([rnx, rny], [bnx, bny]);
      console.log(rlength, blength);
      if (rlength > blength) {
        rnx = rnx - dx[i];
        rny = rny - dy[i];
      } else {
        bnx = bnx - dx[i];
        bny = bny - dy[i];
      }
    }
    dfs(rnx, rny, bnx, bny, count + 1);
  }
}
