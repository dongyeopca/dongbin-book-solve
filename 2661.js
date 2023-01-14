let fs = require('fs');
// let input = Number(fs.readFileSync('./dev/stdin').toString().trim());
let input = 7;
//임의의 길이의 인접한 두개의 부분 수열이 동일한 것이 있으면,나쁜수열

//123으로 이루어져있는 길이가 n인 수열들 중에서 가장 작은 수

//n의 절반으로 나눠서 탐색 들어감 ex 8이면 0:3 4:7 그다음은 3 2 1
let temp = [];
let finish = false;
function maker(s, depth) {
  if (finish) {
    return;
  }
  if (depth == input) {
    if (checker(s, input)) {
      temp.push(s);
      finish = true;
    }
    return;
  }
  maker(s + 1, depth + 1);
  maker(s + 2, depth + 1);
  maker(s + 3, depth + 1);
}
maker('', 0);
console.log(temp[0]);

function checker(a, n) {
  let s = Math.floor(a.length / 2);
  let flag = true;
  while (s > 0) {
    for (let i = 0; i < n - s; i++) {
      if (a.slice(i, i + s) == a.slice(i + s, i + 2 * s)) {
        flag = false;
        break;
      }
    }
    s -= 1;
  }
  return flag;
}
