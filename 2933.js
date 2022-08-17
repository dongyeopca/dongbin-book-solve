let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");
let [r, c] = input.shift().split(" ").map(Number);
let board = [];
for (let i = 0; i < r; i++) {
  board.push(input.shift().split(""));
}
let n = Number(input.shift());
let l = input.shift().split(" ").map(Number);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let cluster = [];
let visited = Array.from(Array(r), () => new Array(c).fill(0));
function destorymineral(turn, height) {
  //height=> 전체높이-높이
  if (turn % 2 == 1) {
    for (let z = 0; z < c; z++) {
      if (board[height][z] == "x") {
        board[height][z] = ".";
        break;
      }
    }
  } else {
    //짝수턴 오른쪽에서 던짐
    for (let z = c - 1; z >= 0; z--) {
      if (board[height][z] == "x") {
        board[height][z] = ".";
        break;
      }
    }
  }
}
//바닥부터 bfs탐색
function bfs(sx, sy) {
  let q = [[sx, sy]];
  visited[sx][sy] = 1;
  while (q.length > 0) {
    let [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        -1 < nx &&
        nx < r &&
        -1 < ny &&
        ny < c &&
        visited[nx][ny] == 0 &&
        board[nx][ny] == "x"
      ) {
        visited[nx][ny] = 1;
        q.push([nx, ny]);
      }
    }
  }
}
function findcluster() {
  let flag = false;
  for (let i = 0; i < c; i++) {
    if (board[r - 1][i] == "x" && visited[r - 1][i] == 0) {
      bfs(r - 1, i);
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] == "x" && visited[i][j] == 0) {
        cluster.push([i, j]);
        flag = true;
      }
    }
  }
  return flag;
}

function choose_height() {
  let min = Infinity;
  for (const location of cluster) {
    let cnt = 0;
    let x = location[0],
      y = location[1];
    for (let j = x + 1; j < r; j++) {
      //클러스터인거
      if (board[j][y] == "x" && visited[j][y] == 1) {
        break;
      } else {
        cnt += 1;
      }
    }
    if (cnt < min) min = cnt;
  }
  return min;
}

function gravity(min) {
  cluster.sort((a, b) => b[0] - a[0]);
  for (const location of cluster) {
    let x = location[0],
      y = location[1];
    board[x + min][y] = board[x][y];
    board[x][y] = ".";
  }
}

//창영이 왼쪽 상근이 오른쪽
//높이 결정후 던짐
//날아가다가 미네랄을 만나면 미네랄은 파괴되고 그자리에서 이동 멈춤
for (let i = 1; i <= l.length; i++) {
  visited = Array.from(Array(r), () => new Array(c).fill(0));
  cluster = [];
  destorymineral(i, r - l[i - 1]);
  if (findcluster()) {
    let h = choose_height();
    gravity(h);
  }
}
for (const i of board) {
  console.log(i.join(""));
}
