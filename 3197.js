// //백조의 호수 플래티넘5
// //물과 2면 이상 접하면 얼음은 녹음
// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// let [r, c] = input.shift().split(" ").map(Number);
// let board = [];
// let dx = [1, -1, 0, 0];
// let dy = [0, 0, -1, 1];
// let flag = false;
// let melting = [];
// let visited = Array.from(Array(r), () => Array(c).fill(0));
// let swallow = [];
// let answer = 0;
// for (let i = 0; i < r; i++) {
//   board.push(input.shift().split(""));
// }
// for (let i = 0; i < r; i++) {
//   for (let j = 0; j < c; j++) {
//     if (board[i][j] == "L") {
//       swallow.push([i, j]);
//     }
//   }
// }

// while (true) {
//   melting = [];
//   answer++;
//   visited = Array.from(Array(r), () => Array(c).fill(0));
//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       if (board[i][j] == "X" && visited[i][j] == 0) {
//         meltingbfs(i, j);
//       }
//     }
//   }
//   for (const [x, y] of melting) {
//     board[x][y] = ".";
//   }
//   if (matching(swallow[0])) {
//       console.log(answer);
//     break;
//   }
// }

// //빙판의 녹음
// function meltingbfs(sx, sy) {
//   let q = [[sx, sy]];
//   visited[sx][sy] = 1;
//   while (q.length > 0) {
//     let [x, y] = q.shift();
//     let cnt = 0;
//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];
//       if (-1 < nx && nx < r && -1 < ny && ny < c && board[nx][ny] == ".") {
//         cnt++;
//       }
//       if (
//         -1 < nx &&
//         nx < r &&
//         -1 < ny &&
//         ny < c &&
//         visited[nx][ny] == 0 &&
//         board[nx][ny] == "X"
//       ) {
//         visited[nx][ny] = 1;
//         q.push([nx, ny]);
//       }
//     }
//     if (cnt >= 1) {
//       melting.push([x, y]);
//     }
//   }
// }

// //백조의 만남
// function matching(start) {
//   let q = [start];
//   let flag = false;
//   let visited = Array.from(Array(r), () => Array(c).fill(0));
//   visited[start[0]][start[1]] = 1;
//   while (q.length > 0) {
//     let [x, y] = q.shift();
//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];
//       if (
//         -1 < nx &&
//         nx < r &&
//         -1 < ny &&
//         ny < c &&
//         (board[nx][ny] == "." || board[nx][ny] == "L") &&
//         visited[nx][ny] == 0
//       ) {
//         visited[nx][ny] = 1;
//         q.push([nx, ny]);
//         if (board[nx][ny] == "L") {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }
}

let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");
let [n, m] = input.shift().split(" ").map(Number);
let board = [];
let swan = [];
let visited = Array.from(Array(n), () => new Array(m).fill(0));
let water = new Queue();
for (let i = 0; i < n; i++) {
  board.push(input.shift().split(""));
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] == ".") {
      water.push([i, j]);
    } else if (board[i][j] == "L") {
      swan.push([i, j]);
      board[i][j] = ".";
      water.push([i, j]);
    }
  }
}
let [sx, sy] = swan[0];
let [ex, ey] = swan[1];
let swanq = new Queue();
visited[sx][sy] = 1;
swanq.push([sx, sy]);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let answer = 0;
let swantemp = [];
function solve() {
  while (true) {
    while (swanq.length > 0) {
      let [x, y] = swanq.pop();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (-1 < nx && nx < n && -1 < ny && ny < m && visited[nx][ny] == 0) {
          if (nx == ex && ny == ey) {
            return answer;
          }
          if (board[nx][ny] == ".") {
            swanq.push([nx, ny]);
          } else {
            swantemp.push([nx, ny]);
          }
          visited[nx][ny] = 1;
        }
      }
    }

    while (swantemp.length > 0) {
      let [x, y] = swantemp.shift();
      swanq.push([x, y]);
    }

    //녹이기
    let l = water.length;
    for (let i = 0; i < l; i++) {
      let [x, y] = water.pop();
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (-1 < nx && nx < n && -1 < ny && ny < m && board[nx][ny] == "X") {
          board[nx][ny] = ".";
          water.push([nx, ny]);
        }
      }
    }
    answer++;
  }
}
console.log(solve());
