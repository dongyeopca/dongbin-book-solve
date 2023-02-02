let fs = require('fs');
let dev = false;
let input = fs
  .readFileSync(dev ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');

let n = Number(input[0]);
let a = input[1].split(' ').map(Number);

// const makeCombination = function(arr,number){
//     const results = [];
//     if(number ==1) return arr.map(e=>[e]);
//     arr.forEach((value,index,origin)=>{
//         let rest = origin.slice(index+1)
//         let combination = makeCombination(rest,number-1);
//         let attached = combination.map(e=>[value,...e]);
//         results.push(...attached)
//     })
//     return results
// }
const makePermutation = function (arr, number) {
  const results = [];
  if (number == 1) return arr.map((e) => [e]);

  arr.forEach((value, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutation = makePermutation(rest, number - 1);
    const attached = permutation.map((e) => [value, ...e]);
    results.push(...attached);
  });
  return results;
};

console.log(
  Math.max(
    ...makePermutation(a, n).map((e) => {
      let value = 0;
      for (let i = 2; i <= n; i++) {
        value += Math.abs(e[i - 2] - e[i - 1]);
      }
      return value;
    })
  )
);

function makePermutation(arr, n) {
  let results = [];
  if (n == 1) return arr.map((e) => [e]);
  arr.forEach((value, index, origin) => {
    let rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    let permutation = makePermutation(rest, n - 1);
    let attach = permutation.map((e) => [value, ...e]);
  });
  results.push(...attach);
  return results;
}
