function solution(n, edge) {
  var answer = 0;
  const connection = {};
  edge.forEach((e) => {
    let [a, b] = e;
    if (connection[a]) {
      connection[a].push(b);
    } else {
      connection[a] = [b];
    }
    if (connection[b]) {
      connection[b].push(a);
    } else {
      connection[b] = [a];
    }
  });

  let q = [1];
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  while (q.length) {
    let node = q.shift();

    for (const next of connection[node]) {
      if (dp[next]) {
        continue;
      }
      dp[next] = dp[node] + 1;

      q.push(next);
    }
  }
  return answer;
}
solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
