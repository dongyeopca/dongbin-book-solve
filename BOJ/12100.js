const fs = require("fs");
const test = true;
const input = fs
  .readFileSync(test ? "./test.txt" : "./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const board = [];
for (let i = 1; i <= n; i++) {
  board.push(input[i].split(" ").map(Number));
}
/**direction {0:상, 1:하 2:좌 3:우} 가 주어진다. */

const moving = (board, direction) => {
  switch (direction) {
    case 0:
      for (let y = 0; y < n; y++) {
        let top = 0;
        for (let x = 1; x < n; x++) {
          if (board[x][y]) {
            temp = board[x][y];
            board[x][y] = 0;
            if (board[top][y] == 0) {
              board[top][y] = temp;
            } else if (board[top][y] == temp) {
              board[top][y] *= 2;
              top += 1;
            } else {
              top += 1;
              board[top][y] = temp;
            }
          }
        }
      }
      break;
    case 1:
      for (let y = 0; y < n; y++) {
        let top = n - 1;
        for (let x = n - 2; x > -1; x--) {
          if (board[x][y]) {
            temp = board[x][y];
            board[x][y] = 0;
            if (board[top][y] == 0) {
              board[top][y] = temp;
            } else if (board[top][y] == temp) {
              board[top][y] *= 2;
              top -= 1;
            } else {
              top -= 1;
              board[top][y] = temp;
            }
          }
        }
      }
      break;
    case 2:
      for (let x = 0; x < n; x++) {
        let top = 0;
        for (let y = 1; y < n; y++) {
          if (board[x][y]) {
            temp = board[x][y];
            board[x][y] = 0;
            if (board[x][top] == 0) {
              board[x][top] = temp;
            } else if (board[x][top] == temp) {
              board[x][top] *= 2;
              top += 1;
            } else {
              top += 1;
              board[x][top] = temp;
            }
          }
        }
      }
      break;
    case 3:
      for (let x = 0; x < n; x++) {
        let top = n - 1;
        for (let y = n - 2; y > -1; y--) {
          if (board[x][y]) {
            temp = board[x][y];
            board[x][y] = 0;
            if (board[x][top] == 0) {
              board[x][top] = temp;
            } else if (board[x][top] == temp) {
              board[x][top] *= 2;
              top -= 1;
            } else {
              top -= 1;
              board[x][top] = temp;
            }
          }
        }
      }
      break;
  }
};

const findMax = (board) => {
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, board[i][j]);
    }
  }
  return max;
};

const deepCopy = (board) => {
  return board.map((list) => [...list]);
};

let answer = 0;
const solution = (board, counter) => {
  if (counter === 5) {
    answer = Math.max(answer, findMax(board));
    return;
  }

  for (let i = 0; i < 4; i++) {
    const copy_board = deepCopy(board);
    moving(copy_board, i);
    solution(copy_board, counter + 1);
  }
};

solution(board, 0);
console.log(answer);
