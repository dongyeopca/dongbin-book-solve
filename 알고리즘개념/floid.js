let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");
let n = Number(input.shift());
let m = Number(input.shift());
let graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(Infinity));

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (i == j) {
      graph[i][j] = 0;
    }
  }
}

for (const line of input) {
  let [a, b, c] = line.split(" ").map((e) => Number(e));
  graph[a][b] = c;
}

for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    process.stdout.write(`${graph[i][j]} `);
  }
  console.log();
}
