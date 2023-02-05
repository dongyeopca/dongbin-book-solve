let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().split('\n');
let [n, m] = input.shift().split(' ').map(Number);
let root = {};
const makeTrie = (s, root) => {
  if (s.length) {
    let alphabet = s.shift();
    if (root[alphabet]) {
      makeTrie(s, root[alphabet]);
    } else {
      root[alphabet] = {};
      makeTrie(s, root[alphabet]);
    }
  } else {
    root['E'] = true;
  }
};
let answer = 0;
for (let i = 0; i < n; i++) {
  let s = Array.prototype.slice.call(input.shift());
  makeTrie(s, root);
}
for (let i = 0; i < m; i++) {
  let s = Array.prototype.slice.call(input.shift());
  let cur = root;
  let flag = true;
  for (const key of s) {
    if (cur[key]) {
      cur = cur[key];
      continue;
    }
    flag = false;
    break;
  }
  if (flag && cur['E']) {
    answer += 1;
  }
}
console.log(answer);
