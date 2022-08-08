let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");
let testcase = Number(input.shift());
for (let z = 0; z < testcase; z++) {
  let n = Number(input.shift());
  let q = [];
  let result = [];
  let graph = Array.from(Array(n + 1), () => new Array());
  let indegree = new Array(n + 1).fill(0);
  let t = input
    .shift()
    .split(" ")
    .map((e) => Number(e));

  let m = Number(input.shift());
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      graph[t[i]].push(t[j]);
      indegree[t[j]] += 1;
    }
  }
  for (let i = 0; i < m; i++) {
    let [a, b] = input
      .shift()
      .split(" ")
      .map((e) => Number(e));

    let flag = true;
    for (let k of graph[a]) {
      if (k === b) {
        graph[a].splice(graph[a].indexOf(b), 1);
        indegree[b] -= 1;
        graph[b].push(a);
        indegree[a] += 1;
        flag = false;
      }
    }
    if (flag) {
      graph[b].splice(graph[b].indexOf(a), 1);
      indegree[a] -= 1;
      graph[a].push(b);
      indegree[b] += 1;
    }
  }

  for (let i = 1; i < n + 1; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }
  if (q.length == 0) {
    console.log("IMPOSSIBLE");
    continue;
  }
  let possible = true;
  while (q.length > 0) {
    if (q.length > 1) {
      //한번에 2개의 노드가 큐에 들어가면서 명확한 순서가 정해지지않음
      possible = false;
      break;
    }
    let start = q.shift();
    result.push(start);
    for (const node of graph[start]) {
      indegree[node] -= 1;
      if (indegree[node] == 0) {
        q.push(node);
      } else if (indegree[node] < 0) {
        possible = false;
        break;
      }
    }
  }
  if (!possible || result.length < n) {
    console.log("IMPOSSIBLE");
  } else {
    console.log(...result);
  }
}
