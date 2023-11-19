const fs = require('fs');
const test = true;
const input = fs
  .readFileSync(test ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let left = 0;
let right = arr.length - 1;
let sum = Infinity;
let answer = '';
while (left < right) {
  let temp = arr[left] + arr[right];
  if (Math.abs(temp) <= Math.abs(sum)) {
    sum = temp;
    answer = [arr[left], arr[right]];
  }
  if (temp > 0) {
    right -= 1;
  } else if (temp < 0) {
    left += 1;
  } else {
    break;
  }
}
console.log(answer[0], answer[1]);
