let fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let [n, m] = input.shift().split(' ').map(Number);
let board = input.map((e) => e.split(' ').map(Number));
let answer = Infinity;
//치킨 거리는 가장 가까운 치킨집과 집과의 거리
//도시 치킨거리는 모든 치킨거리의 합
// m개를 뽑음 m이 많을 수록 치킨거리가 낮아질 확률이 높으니까
// 포함되지 않은 애들을 지움
// 각 집마다 치킨 거리 구함
const copy_board = (board) => {
  return Array.from(board, (e) => [...e]);
};
const combination = (arr, n) => {
  if (n == 1) return arr.map((e) => [e]);
  let results = [];
  arr.forEach((value, index, origin) => {
    let rest = origin.slice(index + 1);
    let combi = combination(rest, n - 1);
    let attach = combi.map((e) => [value, ...e]);
    results.push(...attach);
  });
  return results;
};
//치킨집 찾기
let homes = [];
let chicken_store = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] == 2) {
      chicken_store.push([i, j]);
      //   board[i][j] = 0;
    } else if (board[i][j] == 1) {
      homes.push([i, j]);
    }
  }
}
//선택받은 치킨집 조합
let selected = combination(chicken_store, m);

//치킨거리 구하기
// const chicken_distance = (board) => {
//   let distance = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] == 1) {
//         distance += bfs(i, j, copy_board(board));
//       }
//     }
//   }
//   return distance;
// };

// const bfs = (x, y, board) => {
//   let dx = [-1, 1, 0, 0];
//   let dy = [0, 0, -1, 1];
//   let q = [[x, y, 0]];
//   let visited = Array.from({ length: n }, () => new Array(n).fill(0));
//   visited[x][y] = 1;
//   while (q.length) {
//     let [cur_x, cur_y, distance] = q.shift();
//     for (let i = 0; i < 4; i++) {
//       let nx = cur_x + dx[i];
//       let ny = cur_y + dy[i];
//       if (-1 < nx && nx < n && -1 < ny && ny < n && !visited[nx][ny]) {
//         if (board[nx][ny] == '2') {
//           return distance + 1;
//         }
//         visited[nx][ny] = 1;
//         q.push([nx, ny, distance + 1]);
//       }
//     }
//   }
// };

const cal_distance = (house, store) => {
  return Math.abs(house[0] - store[0]) + Math.abs(house[1] - store[1]);
};
// selected.map((e) => {
//   let copy = copy_board(board);
//   e.forEach((location) => {
//     // let [x, y] = location;
//     // copy[x][y] = '2';
//   });
//   //계산
//   answer = Math.min(answer, chicken_distance(copy));
// });
selected.map((e) => {
  let values = [];
  for (const house of homes) {
    let min_distance = Infinity;
    for (const store of e) {
      min_distance = Math.min(min_distance, cal_distance(house, store));
    }
    values.push(min_distance);
  }
  answer = Math.min(
    answer,
    values.reduce((a, c) => a + c)
  );
});
console.log(answer);
