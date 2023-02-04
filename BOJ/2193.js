let fs = require('fs');
let n = Number(fs.readFileSync('./test.txt').toString());
//이친수 => 0으로 시작하지 않고 1이 두번 연속으로 나타나지 않음.
let binary = new Array(n + 1).fill(0);
binary[1] = 1;
binary[2] = 1;
for (let i = 3; i < n + 1; i++) {
  binary[i] = BigInt(binary[i - 2]) + BigInt(binary[i - 1]);
}

console.log(binary[n].toString());
