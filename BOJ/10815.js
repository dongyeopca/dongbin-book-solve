let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().split('\n');
let n = Number(input.shift());
let number_cards = input.shift().split(' ').map(Number);
let m = Number(input.shift());
let to_check = input.shift().split(' ').map(Number);
let answer = [];
number_cards.sort((a, b) => a - b);

to_check.forEach((check) => {
  let left = 0;
  let right = n - 1;
  let flag = false;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (number_cards[mid] == check) {
      flag = true;
      answer.push(1);
      break;
    } else if (check < number_cards[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (!flag) answer.push(0);
});
console.log(answer.join(' '));
