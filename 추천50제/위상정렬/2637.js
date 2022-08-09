// //어떤 장난감을 여러 가지 부품으로 조립하여 만들려고한다.
// //장난감은 기본부품+중간부품
// //기본부품은 진입차수가 0임
// //중간부품은 진입차수가 최소 1이상임
// // 완재품 n을 만들기 위한 기본부품과 그 갯수를 출력하여라.
// let fs = require("fs");
// let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

// let n = Number(input.shift());
// let m = Number(input.shift());
// let graph = Array.from(Array(n + 1), () => new Array());
// let defaultindegree = new Array(n + 1).fill(0);
// let indegree = new Array(n + 1).fill(0);
// let needs = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));
// let q = [];
// for (const item of input) {
//   //x가 중간 부품 혹은 완제품 y가 기본부품 k는 갯수
//   let [x, y, k] = item.split(" ").map((e) => Number(e));
//   graph[y].push([x, k]);
//   defaultindegree[x] += 1;
//   indegree[x] += 1;
// }
// for (let i = 1; i < n + 1; i++) {
//   if (indegree[i] == 0) {
//     q.push(i);
//   }
// }

// while (q.length > 0) {
//   let now = q.shift();
//   for (let [next, need] of graph[now]) {
//     if (defaultindegree[now] == 0) {
//       needs[next][now] += need;
//     } else {
//       for (let i = 1; i < n + 1; i++) {
//         needs[next][i] += needs[now][i] * need;
//       }
//     }
//     indegree[next] -= 1;
//     if (indegree[next] == 0) {
//       q.push(next);
//     }
//   }
// }
// let result = "";
// for (let [index, count] of needs[n].entries()) {
//   if (count != 0) {
//     result += index + " " + count + "\n";
//   }
// }
// console.log(result.trim());

let [N, M, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;
M = +M;
// i: 부품번호, graph: 그래프, indegree: 해당 노드로 들어오는 개수, count: 해당 노드 필요 개수
const graph = Array(N + 1)
  .fill(null)
  .map((ele) => []);
const indegree = Array(N + 1).fill(0);
const count = Array(N + 1).fill(0);

// u -> v graph, indegree
// 1. 완성품 -> 기본부품 방향으로 '위상정렬'한다.
arr.forEach((line) => {
  const [u, v, era] = line.split(" ").map(Number);
  // 2. 그래프 인덱스를 시작노드, 해당 값에 다음 노드와 그 노드가 필요한 개수를 담는다.
  graph[u].push([v, era]);
  indegree[v] += 1;
});

const queue = [];
for (let i = 1; i < N + 1; i++) {
  if (!indegree[i]) {
    queue.push(i);
    // 3. 최종 완성품 노드는 필요개수를 1로 한다. 부품 개수를 곱하면서 나아가기 때문.
    count[i] = 1;
  }
}

let ptr = 0;
while (queue.length > ptr) {
  const node = queue[ptr++];
  for (const [adj, era] of graph[node]) {
    --indegree[adj];
    count[adj] += era * count[node];
    if (!indegree[adj]) {
      queue.push(adj);
    }
  }
  /* 4. 큐에서 꺼내진 시작 노드가 제거될 때, 이 노드가 기본 부품인지 체크한다.
  	완성품 노드는 기본부품 노드를 향해 graph값을 가진다. 부품개수를 0으로 변환한다.
  	(만약 기본부품이라도 사용되지 않는 쓰레기부품이 있다면 0이 아닌 -1따위로 구분.) */
  if (graph[node].length) count[node] = 0;
}

// 5. 부품번호 순서대로 기본에서 완성으로 나아가지 않을 수 있으므로 filter 사용(x).
let result = "";
for (let i = 1; i < N + 1; i++) {
  if (count[i] !== 0) {
    result += i + " " + count[i] + "\n";
  }
}

console.log(result.trim());
