let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

//n명이 모임 짝수
let n = Number(input.shift());
let graph = input.map((e) => e.split(" ").map((e) => Number(e)));

let visited = [];
let answer = [];
function dfs(cur) {
  if (visited.length == n / 2) {
    let vs = Array.from(Array(n), (_, i) => i + 1).filter(
      (x) => !visited.includes(x)
    );
    let temp = 0;
    let temp2 = 0;
    // console.log(visited);
    for (let i = 0; i < n / 2; i++) {
      for (let j = i + 1; j < n / 2; j++) {
        temp += graph[visited[i] - 1][visited[j] - 1];
        temp += graph[visited[j] - 1][visited[i] - 1];
      }
    }
    for (let i = 0; i < n / 2; i++) {
      for (let j = i + 1; j < n / 2; j++) {
        temp2 += graph[vs[i] - 1][vs[j] - 1];
        temp2 += graph[vs[j] - 1][vs[i] - 1];
      }
    }
    answer.push(Math.abs(temp - temp2));
  }
  if (cur == n + 1) {
    return;
  }
  //선택
  visited.push(cur);
  dfs(cur + 1);
  //선택안함
  visited.pop();
  dfs(cur + 1);
}
dfs(1);
console.log(Math.min(...answer));
