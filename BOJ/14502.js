let fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const board = input.map((e) => e.split(' ').map(Number));
let answer = 0;

//바이러스와 빈영역의 개수 구하기
//바이러스 퍼트리기
