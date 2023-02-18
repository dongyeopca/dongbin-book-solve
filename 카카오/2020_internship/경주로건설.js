function solution(board) {
  var answer = 0;
  let n = board.length;
  function bfs(x, y, direction, cost) {
    let dx = [-1, 1, 0, 0]; //상 하 우 좌
    let dy = [0, 0, 1, -1];
    let visited = Array.from(Array(n), () => new Array(n).fill(Infinity));
    visited[x][y] = 0;
    let q = [[x, y, direction, cost]];
    while (q.length) {
      let [x, y, direction, cost] = q.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        let ncost;
        direction != i ? (ncost = cost + 600) : (ncost = cost + 100);
        if (-1 < nx && nx < n && -1 < ny && ny < n && board[nx][ny] == 0 && visited[nx][ny] > ncost) {
          visited[nx][ny] = ncost;
          q.push([nx, ny, i, ncost]);
        }
      }
    }
    return visited[n - 1][n - 1];
  }
  let case1 = bfs(0, 0, 1, 0);
  let case2 = bfs(0, 0, 2, 0);
  answer = Math.min(case1, case2);
  if (answer == Infinity) return -1;
  return answer;
}
solution([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
