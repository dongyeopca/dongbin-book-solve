let fs = require('fs');
const { deflateSync } = require('zlib');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
let n = Number(input.shift());
let connection = Array.from({ length: n + 1 }, () => new Array());
let tree = [[], [0, 0]];

//리프노드 찾아야함.
input
  .map((e) => e.split(' '))
  .forEach((val, idx) => {
    let [type, count, connect] = val;
    connection[connect].push(idx + 2); //리프노드탐색을 위해
    tree.push([type, +count]);
  });
// const travle = (node, sheep) => {
//   if (!connection[node].length) {
//     if (sheep > 0) answer += sheep;
//   }
//   connection[node].forEach((e, index, origin) => {
//     let [type, count, next] = e;
//     if (type == 'S') {
//       travle(next, sheep + count);
//       origin[index][1] = 0;
//     } else {
//       travle(next, sheep - count);
//     }
//   });
// };
const travle = (node) => {
  let counter = 0;
  for (let i of connection[node]) {
    counter += travle(i);
  }
  if (tree[node][0] == 'W') {
    counter - tree[node][1] > 0 ? (counter = counter - tree[node][1]) : (counter = 0);
  } else {
    counter += tree[node][1];
  }
  return counter;
};
console.log(travle(1));

//forEach와 for문의 시간복잡도가 다르다! forEach가 더 빠름 왜그런지 알아보기!
//일반적 for문에서 인덱스에 접근하기 위해 선언하는 과정을 생략하기 때문!
