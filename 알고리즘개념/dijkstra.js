let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");

let [n, m] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
let start = Number(input.shift());
let graph = Array.from(Array(n + 1), () => new Array());
let distance = new Array(n + 1).fill(Infinity);

for (const line of input) {
  let [a, b, c] = line.split(" ").map((e) => Number(e));
  //a와 b는 노드, c는 두 노드간의 거리
  graph[a].push([b, c]);
}

function dijkstra(start) {
  let q = [];
  q.push([0, start]);
  distance[start] = 0;
  while (q.length > 0) {
    let [dist, now] = q.shift();
    if (distance[now] < dist) {
      continue;
    }
    for (const node of graph[now]) {
      let cost = dist + node[1];
      if (cost < distance[node[0]]) {
        distance[node[0]] = cost;
        q.push([cost, node[0]]);
        q.sort((a, b) => a[0] - b[0]);
      }
    }
  }
}
dijkstra(start);

for (let i = 1; i < n + 1; i++) {
  distance[i] === Infinity ? console.log("infinity") : console.log(distance[i]);
}
