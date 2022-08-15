let fs = require("fs");

// 2**10 == (2**5) * (2**5) <= 제곱의 성질을 활용해서 연산횟수를 log(n)으로 줄일수있음
let input = fs
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
let [n, b] = input.shift();
let graph = input.map((e) => [...e]);

// for (let i = 1; i < b; i++) {
//   for (let z = 0; z < n; z++) {
//     let arr = [...graph[z]];
//     for (let j = 0; j < n; j++) {
//       let sum = 0;
//       for (let k = 0; k < n; k++) {
//         sum += arr[k] * input[k][j];
//         // console.log(arr[k] * input[k][j]);
//       }
//       graph[z][j] = sum % 1000;
//     }
//   }
//   //   graph = graph.map((e) => e.map((a) => a % 1000));
// }

function mul(a, b) {
  let temp = Array.from(Array(n), () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        temp[i][j] += a[i][k] * b[k][j];
      }
      temp[i][j] %= 1000;
    }
  }
  return temp;
}

function divide(temp, count) {
  if (count == 1) {
    return temp;
  } else if (count == 2) {
    return mul(temp, temp);
  } else {
    if (count % 2 == 0) {
      return divide(mul(temp, temp), count / 2);
    } else {
      return mul(divide(temp, count - 1), temp);
    }
  }
}
graph = divide(graph, b);

graph = graph.map((e) => e.map((a) => a % 1000));
for (const i of graph) {
  console.log(i.join(" "));
}
