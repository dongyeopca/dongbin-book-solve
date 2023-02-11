let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let t = parseInt(input.shift());
for (let i = 0; i < t; i++) {
  let n = parseInt(input.shift());
  let rank = input.shift().split(' ').map(Number);
  let connection = Array.from({ length: n + 1 }, () => new Array());
  let indegree = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      connection[rank[i]].push(rank[j]);
      indegree[rank[j]] += 1;
    }
  }
  let m = parseInt(input.shift());
  for (let i = 0; i < m; i++) {
    let [a, b] = input.shift().split(' ').map(Number);
    let flag = true;
    for (const [index, k] of Object.entries(connection[a])) {
      if (k == b) {
        flag = false;
        connection[a].splice(index, 1);
        indegree[b] -= 1;
        connection[b].push(a);
        indegree[a] += 1;
      }
    }
    if (flag) {
      for (const [index, k] of Object.entries(connection[b])) {
        if (k == a) {
          connection[b].splice(index, 1);
          indegree[a] -= 1;
          connection[a].push(b);
          indegree[b] += 1;
        }
      }
    }
  }
  let q = [];
  let answer = [];
  for (let i = 1; i < n + 1; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }
  let possibility = true;
  if (q.length == 0) {
    console.log('IMPOSSIBLE');
    continue;
  }
  while (q.length) {
    let node = q.shift();
    answer.push(node);
    if (q.length > 1) {
      possibility = false;
      break;
    }
    for (let next of connection[node]) {
      indegree[next] -= 1;
      if (indegree[next] == 0) {
        q.push(next);
      } else if (indegree[next] < 0) {
        possibility = false;
        break;
      }
    }
  }
  if (possibility) {
    console.log(answer.join(' '));
  } else {
    console.log('IMPOSSIBLE');
  }
}
