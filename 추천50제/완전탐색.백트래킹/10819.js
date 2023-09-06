const fs = require('fs');
const test = true;
const input = fs
  .readFileSync(test ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((e) => [e]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permu) => [v, ...permu]);
    res.push(...attach);
  });
  return res;
}
let answer = 0;
const permutations = permutation(arr, n);

permutations.forEach((permu) => {
  let temp = 0;
  for (let i = 0; i < n - 1; i++) {
    temp += Math.abs(permu[i] - permu[i + 1]);
  }
  answer = Math.max(temp, answer);
});

console.log(answer);
