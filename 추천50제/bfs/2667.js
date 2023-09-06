const fs = require('fs');
const test = true;
const input = fs
  .readFileSync(test ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = input[0];
let board = input.slice(1).map((arr) => arr.split('').map(Number));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let arr = [];

class Queue {
  constructor() {
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }
  push(value) {
    this.q.push(value);
    this.tail += 1;
  }
  shift() {
    this.head += 1;
    return this.q[this.head - 1];
  }
  size() {
    return this.tail - this.head;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j]) {
      bfs(i, j);
    }
  }
}
arr.sort((a, b) => a - b);
console.log(arr.length);
console.log(arr.join('\n'));

function bfs(i, j) {
  let q = new Queue();
  q.push([i, j]);
  let counter = 1;
  board[i][j] = 0;
  while (q.size()) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny]) {
        q.push([nx, ny]);
        board[nx][ny] = 0;
        counter += 1;
      }
    }
  }
  arr.push(counter);
}
