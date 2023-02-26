function solution(n) {
  let visited = Array.from(Array(n), (e, index) => new Array(index + 1).fill(0));
  const dfs = (x, y, move, cur, type) => {
    if (move == -1) {
      return;
    }
    n = n - 1;
    switch (type) {
      case 1:
        while (true) {
          if (move) {
            visited[x][y] = cur;
            cur += 1;
            move -= 1;
            x += 1;
            continue;
          }
          return dfs(x - 1, y + 1, n, cur, 2);
        }
      case 2:
        while (true) {
          if (move) {
            visited[x][y] = cur;
            cur += 1;
            move -= 1;
            y += 1;
            continue;
          }
          return dfs(x - 1, y - 2, n, cur, 3);
        }
      case 3:
        while (true) {
          if (move) {
            visited[x][y] = cur;
            cur += 1;
            move -= 1;
            x -= 1;
            y -= 1;
            continue;
          }
          return dfs(x + 2, y + 1, n, cur, 1);
        }
    }
  };
  dfs(0, 0, n, 1, 1);
  return visited.join(',').split(',').map(Number);
}
