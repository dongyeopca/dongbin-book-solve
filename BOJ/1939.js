let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const solution = (input) => {
  let [n, m] = input.shift().split(' ').map(Number);

  const connection = Array.from({ length: n + 1 }, () => new Array());
  let max = 0;
  for (let i = 0; i < m; i++) {
    let [a, b, c] = input.shift().split(' ').map(Number);
    connection[a].push([b, c]);
    connection[b].push([a, c]);
    if (c > max) max = c;
  }
  const [d_a, d_b] = input.shift().split(' ').map(Number);

  //섬과 섬끼리 연결된 다리의 최대중량
  //d_a와 d_b가 서로 물품을 주고받을때 한번의 이동에서 옮길수있는 물품의 최대중량을 구하라

  const bfs = (mid) => {
    let visited = new Array(n + 1).fill(false);
    let q = [d_a];
    while (q.length) {
      let cur = q.shift();
      visited[cur] = true;
      if (cur == d_b) {
        return true;
      }
      for (const [ni, nc] of connection[cur]) {
        if (!visited[ni] && mid <= nc) {
          q.push(ni);
          visited[ni] = true;
        }
      }
    }
    return false;
  };

  let start = 1;
  let end = max;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (bfs(mid)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(end);
};
solution(input);
