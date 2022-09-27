function solution(n, paths, gates, summits) {
  var answer = [];
  let visited = new Array(n + 1).fill(0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (const path of paths) {
    let [start, end, degree] = path;
    graph[start][end] = degree;
    graph[end][start] = degree;
  }
  for (const gate of gates) {
    visited[gate] = 1;
    for (const summit of summits) {
      dfs(gate, 0, gate, summit);
    }
    visited[gate] = 0;
  }
  answer.sort((a, b) => a[1] - b[1]);

  function dfs(cur, intensity, start, end) {
    if (cur == end) {
      return answer.push([end, intensity]);
    }
    if ((cur != start && gates.includes(cur)) || summits.includes(cur)) {
      return;
    }
    for (let i = 1; i < n + 1; i++) {
      if (graph[cur][i] != 0 && visited[i] == 0) {
        let max = Math.max(graph[cur][i], intensity);
        visited[i] = 1;
        dfs(i, max, start, end);
        visited[i] = 0;
      }
    }
  }
}
solution(
  6,
  [
    [1, 2, 3],
    [2, 3, 5],
    [2, 4, 2],
    [2, 5, 4],
    [3, 4, 4],
    [4, 5, 3],
    [4, 6, 1],
    [5, 6, 1],
  ],
  [1, 3],
  [5]
);
