let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");

let [v, e] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
let indegree = new Array(v + 1).fill(0);
let graph = Array.from(Array(v + 1), () => new Array());

for (const line of input) {
  let [a, b] = line.split(" ").map((e) => Number(e));
  graph[a].push(b);
  indegree[b] += 1;
}

function topology() {
  let result = [];
  let q = [];

  for (let i = 1; i < v + 1; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }

  while (q.length > 0) {
    let now = q.shift();
    result.push(now);
    for (const node of graph[now]) {
      indegree[node] -= 1;
      if (indegree[node] == 0) {
        q.push(node);
      }
    }
  }

  for (const i of result) {
    // console.log(i)
    process.stdout.write(`${i} `);
  }
}

topology();
