//거울에 마주쳐야 방향을 바꿀수있음 => 즉 방향을 최소한으로 바꾸고
//목적지까지 도달하는 방법
//dfs에 이전 방향정보가 필요
let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");
let [w, h] = input.shift().split(" ").map(Number); //column raw

let visited = Array.from(Array(h),()=>Array(w));

let lazer = [];
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (input[i][j] == "C") {
      lazer.push([i, j]);
    }
  }
}
let [sx, sy] = lazer[0];
let [ex, ey] = lazer[1];
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let answer = [];
function bfs(sx, sy) {
  let q = [[sx,sy]];
  while (q.length > 0) {
    let [x,y] = q.shift();
    for(let i=0; i<4; i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        if(-1<nx && nx<h && -1<ny && ny<w && )
    }
  }
}
// // input[sx][sy] = "*";
bfs(sx, sy);
