let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let [n, m] = input.shift().split(' ').map(Number);
let connection = Array.from({ length: n + 1 }, () => new Array());
let indegree = new Array(n + 1).fill(0);

for (let i = 0; i < m; i++) {
  let [a, b] = input.shift().split(' ').map(Number);
  connection[a].push(b);
  indegree[b] += 1;
}
const topology = () => {
  let q = [];
  let answer = [];
  for (let i = 1; i < n + 1; i++) {
    //차수 0인애들 찾기.
    if (indegree[i] == 0) {
      q.push(i);
    }
  }
  while (q.length) {
    let node = q.shift();
    for (const next of connection[node]) {
      indegree[next] -= 1;
      if (indegree[next] == 0) {
        q.push(next);
      }
    }
    answer.push(node);
  }
  return answer;
};
let answer = topology();
console.log(answer.join(' '));
