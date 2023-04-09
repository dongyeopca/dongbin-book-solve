const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().split('\n');
const n = Number(input.shift());
let min = 3;
let dest = Array(n)
  .fill(0)
  .map((e, index) => index + 1);

const flipper = (arr, start, end) => {
  arr.splice(
    start,
    end - start + 1,
    ...arr
      .slice(start, end + 1)
      .reverse()
      .map((e) => -1 * e)
  );
  return arr;
};
const recursion = (arr, counter) => {
  if (counter > 2) return;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let copy = [...arr];
      if (dest.join('') == flipper(copy, i, j).join('')) {
        min = Math.min(min, counter);
        return
      } else {
        recursion(copy, counter + 1);
      }
    }
  }
};
for (const test of input) {
  min = 3;
  let cur = test.split(' ');
  recursion(cur, 1);
  if (min == 1) {
    console.log('one');
  } else if (min == 2) {
    console.log('two');
  } else {
    console.log('over');
  }
}


///연속되게 구간 블록을 정해서 해보자
