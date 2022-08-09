let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

//union-find(부모노드 판별)
function find_parent(parent, x) {
  if (parent[x] != x) {
    parent[x] = find_parent(parent, parent[x]);
  }
  return parent[x];
}

function union_parent(parent, a, b) {
  a = find_parent(parent, a);
  b = find_parent(parent, b);
  if (a > b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

let [v, e] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
let parent = new Array(v + 1).fill(0);

let edges = [];
let result = 0;
for (let i = 1; i < v + 1; i++) {
  parent[i] = i;
}

for (const line of input) {
  let [a, b, cost] = line.split(" ").map((e) => Number(e));
  edges.push([cost, a, b]);
}
edges.sort((a, b) => a[0] - b[0]);

for (const edge of edges) {
  let [cost, a, b] = edge;
  if (find_parent(parent, a) != find_parent(parent, b)) {
    union_parent(parent, a, b);
    result += cost;
  }
}

console.log(result);
