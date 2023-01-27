let fs = require('fs');
let dev = true;
let input = fs
  .readFileSync(dev ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [n, m] = input.shift().split(' ').map(Number);
let arr = input.shift().split(' ').map(Number);

const makeCombination = function (arr, n) {
  let results = [];
  if (n == 1) return arr.map((e) => [e]);
  arr.forEach((value, index, origin) => {
    const rest = origin.slice(index + 1);
    const combi = makeCombination(rest, n - 1);
    const attached = combi.map((e) => [value, ...e]);
    results.push(...attached);
  });
  return results;
};
console.log(
  Math.max(
    ...makeCombination(arr, 3)
      .map((e) => {
        return e.reduce((acc, cur) => acc + cur);
      })
      .filter((e) => e <= m)
  )
);
