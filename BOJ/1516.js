let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');

let n = parseInt(input.shift());
let connection = Array.from(Array(n + 1), () => new Array());
let time = new Array(n + 1).fill(0);
let indegree = new Array(n + 1).fill(0);
for (let i = 1; i < n + 1; i++) {
  let info = input.shift().split(' ').map(Number).slice(0, -1);
  time[i] = info.shift();
  while (info.length) {
    connection[info.shift()].push(i);
    indegree[i] += 1;
  }
}
let topology = () => {
  let q = [];
  let result = new Array(n + 1).fill(0);
  for (let i = 1; i < n + 1; i++) {
    if (indegree[i] == 0) {
      result[i] = time[i];
      q.push(i);
    }
  }

  while (q.length) {
    let node = q.shift();
    for (const next of connection[node]) {
      indegree[next] -= 1;
      result[next] = Math.max(result[next], result[node] + time[next]);
      if (indegree[next] == 0) {
        q.push(next);
      }
    }
  }
  return result;
};
let answer = topology();
answer.shift();
answer.forEach((e) => console.log(e));
