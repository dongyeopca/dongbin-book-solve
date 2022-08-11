let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");
//문제
//받침대의 높이는 항상 1
let [n, l] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));

let graph = input.map((e) => e.split(" ").map((e) => Number(e)));
let copy = Array.from(Array(n), () => Array(n));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    copy[j][i] = graph[i][j];
  }
}

let answer = move(graph) + move(copy);
console.log(answer);

function move(arr) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const now = arr[i];
    let possible = 1;
    for (let j = 1; j < n; j++) {
      if (now[j - 1] == now[j]) possible++;
      else if (now[j - 1] + 1 == now[j] && possible >= l) possible = 1;
      else if (now[j - 1] == now[j] + 1 && possible >= 0) possible = 1 - l;
      else {
        possible = -1;
        break;
      }
    }
    if (possible >= 0) {
      answer++;
    }
  }
  return answer;
}
