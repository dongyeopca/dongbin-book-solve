// topology

const fs = require("fs");
const test = false;
const input = fs
  .readFileSync(test ? "./dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

// 진입차수가 0일때 건물을 지을수있음
// 특정 진입차수를 공통으로 가지는 애들이 있을때는 Math.min()으로 값을 줘야함.
// 큐에 진입한 애들중에서 누굴 먼저 빼야하는가?
// w 가 의존하고 있는 선행은 파악이 가능.
// 그러면 w위주로 봐야
let t = Number(input[0]);
let caseIndex = 1;
for (let test = 0; test < t; test++) {
  let [n, k] = input[caseIndex].split(" ").map(Number);
  let indegree = Array(n).fill(0);
  let result = Array(n).fill(0);
  let next = Array.from({ length: n }, () => new Array());
  let time = input[caseIndex + 1].split(" ").map(Number);
  let q = [];
  for (let i = caseIndex + 2; i < caseIndex + k + 2; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    next[x - 1].push(y - 1);
    indegree[y - 1] += 1;
  }
  let w = input[caseIndex + 2 + k];
  for (let i = 0; i < n; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }
  while (indegree[w - 1]) {
    let cur = q.shift();
    for (let n of next[cur]) {
      result[n] = Math.max(result[n], result[cur] + time[cur]);
      if (--indegree[n] == 0) q.push(n);
    }
  }
  console.log(result[w - 1] + time[w - 1]);
  caseIndex += k + 3;
}
