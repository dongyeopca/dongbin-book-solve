function solution(x, y, n) {
  if (x == y) return 0;
  var answer = 0;
  let data = [x];
  let dp = {};
  dp[x] = 0;
  while (data.length > 0) {
    let start = data.shift();
    for (const calculated of [start + n, start * 2, start * 3]) {
      if (calculated > y || dp[calculated]) {
        continue;
      }
      if (calculated == y) return dp[start] + 1;
      dp[calculated] = dp[start] + 1;
      data.push(calculated);
    }
  }
  if (!dp[y]) return -1;
  return dp[y];
}

//+n || *2 || *3
