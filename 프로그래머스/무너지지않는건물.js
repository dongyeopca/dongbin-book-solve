// 누적합 문제 (2차원 prefix)

function solution(board, skill) {
  var answer = 0;
  const n = board.length;
  const m = board[0].length;
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  for (const i of skill) {
    let [type, r1, c1, r2, c2, degree] = i;
    type == 2 ? (degree = degree) : (degree = -degree);
    dp[r1][c1] += degree;
    dp[r2 + 1][c1] += -degree;
    dp[r1][c2 + 1] += -degree;
    dp[r2 + 1][c2 + 1] += degree;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dp[i][j] += dp[i - 1][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] += dp[i][j - 1];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] + dp[i][j] > 0) {
        answer++;
      }
    }
  }
  return answer;
}
