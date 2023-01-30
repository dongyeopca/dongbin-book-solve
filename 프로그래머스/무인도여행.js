function solution(maps) {
  let board = maps.map((e) => e.split(''));
  var answer = [];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let q = [];
  let m = maps.length;
  let n = maps[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let food = 0;
      if (board[i][j] != 'X') {
        q.push([i, j]);
        food += Number(board[i][j]);
        board[i][j] = 'X';
        while (q.length > 0) {
          let [x, y] = q.shift();
          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (-1 < nx && nx < m && -1 < ny && ny < n && board[nx][ny] != 'X') {
              q.push([nx, ny]);
              food += Number(board[nx][ny]);
              board[nx][ny] = 'X';
            }
          }
        }
      }
      if (food) answer.push(food);
    }
  }
  if (answer.length) return answer.sort((a, b) => a - b);
  return [-1];
}
