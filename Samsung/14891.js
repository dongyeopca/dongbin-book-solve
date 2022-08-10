// 톱니바퀴 상태는 시계방향으로 s(1) n(0)로 주어진다.
// 시계방향으로 회전하면 stack.push(stack.pop())
// 반시계방향으로 회전하면 stack.push(stack.shift())
//k에는 [회전시킨 톱니바퀴 번호/ 방향(1이면 시계방향 -1이면 반시계방향]
//오른쪽으로 맞닫는 톱니의 인덱스 2
//왼쪽으로 맞닫는 톱니의 인덱스 6
let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");
let wheels = Array.from(Array(4), () => new Array());
let visited = new Array().fill(0);
let q = [];
for (let i = 0; i < 4; i++) {
  wheels[i] = input
    .shift()
    .split("")
    .map((e) => Number(e));
}
let k = Number(input.shift());
let answer = 0;
for (let spin = 0; spin < k; spin++) {
  let [wheel, direction] = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  visited = new Array().fill(0);
  q = [];
  dfs(wheel - 1, direction);
  for (const item of q) {
    let [a, b] = item;
    if (b == 1) {
      wheels[a].splice(0, 0, wheels[a].pop());
    } else {
      wheels[a].push(wheels[a].shift());
    }
  }
}

for (let i = 0; i < 4; i++) {
  if (wheels[i][0] == 1) {
    answer += 2 ** i;
  }
}
console.log(answer);

function dfs(wheel, direction) {
  //wheel은 인덱스로 넘어가야함
  q.push([wheel, direction]);
  visited[wheel] = 1;
  if (wheel - 1 >= 0 && !visited[wheel - 1]) {
    //좌측으로
    if (wheels[wheel][6] != wheels[wheel - 1][2]) {
      //반대방향으로
      dfs(wheel - 1, direction * -1);
    } else {
      visited[wheel - 1] = 1;
    }
  }
  if (wheel + 1 < 4 && !visited[wheel + 1]) {
    if (wheels[wheel][2] != wheels[wheel + 1][6]) {
      dfs(wheel + 1, direction * -1);
    } else {
      visited[wheel + 1] = 1;
    }
  }
}
