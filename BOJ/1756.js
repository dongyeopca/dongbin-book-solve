let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let [d, n] = input.shift().split(' ').map(Number);
let oven = input.shift().split(' ').map(Number);
let pizzas = input.shift().split(' ').map(Number);

let answer = [];
//다음과 같은 경우 오븐의 깊이가 30만까지 나올수있음. 메모리 오버
// pizzas.forEach((pizza) => {
//   let flag = true;
//   for (let i = 0; i < oven.length; i++) {
//     if (pizza > oven[i]) {
//       answer.push(i);
//       oven = oven.slice(0, i);
//       flag = false;
//       break;
//     }
//   }
//   if (flag) {
//     answer.push(oven.length - 1);
//     oven = oven.slice(0, oven.length - 1);
//   }
// });
// if (answer.length != pizzas.length) {
//   console.log(0);
// } else {
//   console.log(answer[answer.length - 1]);
// }
for (let i = 0; i < oven.length - 1; i++) {
  if (oven[i] < oven[i + 1]) {
    oven[i + 1] = oven[i];
  }
}

for (const pizza of pizzas) {
  let start = 0;
  let end = oven.length - 1;
  let temp = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (oven[mid] >= pizza) {
      temp = Math.max(temp, mid);
      start = mid + 1;
    } else if (oven[mid] < pizza) {
      end = mid - 1;
    }
  }
  answer.push(temp + 1);
  if (temp == -1) {
    break;
  }
  oven = oven.slice(0, temp);
}
console.log(answer[answer.length - 1]);

//BOJ 1756 메모리 한계로 노드로는 정답 제출 불가.
