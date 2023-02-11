let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let n = parseInt(input.shift()); //완제품 번호
let m = parseInt(input.shift());
let connection = Array.from({ length: n + 1 }, () => new Array());
let indegree = new Array(n + 1).fill(0);
let needs = new Array(n + 1).fill(0);
input
  .map((e) => e.split(' ').map(Number))
  .forEach((part) => {
    let [made, need, need_count] = part;
    indegree[need] += 1;
    connection[made].push([need, need_count]);
  });

let q = [];
for (let i = 1; i < n + 1; i++) {
  if (indegree[i] == 0) {
    q.push(i);
    needs[i] = 1;
  }
}

while (q.length) {
  let node = q.shift();
  for (const next of connection[node]) {
    indegree[next[0]] -= 1;
    needs[next[0]] += next[1] * needs[node];
    if (indegree[next[0]] == 0) {
      q.push(next[0]);
    }
  }
}
for (let i = 1; i < n + 1; i++) {
  if (connection[i].length) needs[i] = 0;
}
needs.forEach((value, index) => {
  if (value != 0) console.log(index, value);
});
