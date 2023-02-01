let fs = require('fs');
let dev = true;
let input = fs.readFileSync(dev ? './test.txt' : './dev/stdin').toString();
let n = Number(input);
//숫자 1,2,3으로만 이루어진 수열
let sequences = [];

const isGood = (str) => {
  for (let i = 1; i <= Math.floor(str.length / 2); i++) {
    //비교길이
    let len = str.length;
    for (let j = 0; j <= str.length - 2 * i; j += i) {
      if (str.substring(len - i, len) == str.substring(len - i * 2, len - i)) {
        return false;
      }
    }
  }
  return true;
};

const makeSequence = (str) => {
  if (sequences.length) return;
  if (str.length == n) {
    sequences.push(str);
    return;
  }
  for (let i = 1; i <= 3; i++) {
    let temp = str + `${i}`;
    if (temp.length <= n && isGood(temp)) makeSequence(temp);
  }
};
makeSequence('1');
console.log(sequences[0]);
