let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim();
input = Number(input);
//어떤 수에 6이 3개 연속으로
//항상 더 작게 선택
let counter = 1;
let start = 666;
while (true) {
  if (counter == input) {
    break;
  }
  ++start;
  if (start.toString().includes('666')) {
    counter += 1;
  }
}
console.log(start);
