const fs = require('fs');
let input = fs
  .readFileSync(process.platform == 'linux' ? './dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');

//다른 지원자에 비해 둘다 떨어지면 탈락
let readIndex = 0;
const test = parseInt(input.shift());
for (let i = 0; i < test; i++) {
  let answer = 1;
  let n = parseInt(input[readIndex]);
  readIndex += 1;
  const applier = [];
  for (let j = 0; j < n; j++) {
    applier.push(input[readIndex].split(' ').map(Number));
    readIndex += 1;
  }
  console.log(applier);
  //서류성적 높은 순으로 정렬
  //최대로 뽑고싶기 때문에 어학성적은 낮은순으로 정렬
  applier.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });
  //이후 인덱스 1부터 앞에 있는애보다 어학성적이 낮지만 않으면 선발
  let min_grade = applier[0][1];
  for (k = 1; k < applier.length; k++) {
    if (applier[k][1] < min_grade) {
      min_grade = applier[k][1];
      answer += 1;
    }
  }
  console.log(answer);
}
