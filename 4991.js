let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");
while (true) {
  let [n, m] = input.shift().split(" ").map(Number);
  if (n == 0 && m == 0) {
    break;
  }
  let board = [];
  for (let i = 0; i < m; i++) {
    board.push(input.shift().split(""));
  }

}

// . * X O

// *인 지점들을 찾고 해당 목적지까지 최단거리 값들을 더한다.
