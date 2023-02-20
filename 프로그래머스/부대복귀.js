function solution(n, roads, sources, destination) {
  let connection = Array.from({ length: n + 1 }, () => new Array());
  for (const [s, e] of roads) {
    connection[s].push(e);
    connection[e].push(s);
  }
  let dp = new Array(n + 1).fill(Infinity);
  function bfs(s) {
    dp[s] = 0;
    let q = [s];
    while (q.length) {
      let cur_node = q.shift();
      for (let next of connection[cur_node]) {
        if (dp[next] > dp[cur_node] + 1) {
          dp[next] = dp[cur_node] + 1;
          q.push([next]);
        }
      }
    }
  }

  bfs(destination);

  return sources.map((v) => {
    if (dp[v] === Infinity) return -1;
    else return dp[v];
  });
}
