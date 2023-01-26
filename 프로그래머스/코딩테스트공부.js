function solution(alp, cop, problems) {
  let Maxa = alp;
  let Maxc = cop;
  for (let i = 0; i < problems.length; i++) {
    Maxa = Math.max(problems[i][0], Maxa);
    Maxc = Math.max(problems[i][1], Maxc);
  }
  let dp = Array.from(Array(Maxa + 1), () => new Array(Maxc + 1).fill(Infinity));
  dp[alp][cop] = 0;
  for (let i = alp; i < Maxa + 1; i++) {
    for (let j = cop; j < Maxc + 1; j++) {
      if (i + 1 <= Maxa) dp[i + 1][j] = dp[i + 1][j] < dp[i][j] + 1 ? dp[i + 1][j] : dp[i][j] + 1;
      if (j + 1 <= Maxc) dp[i][j + 1] = dp[i][j + 1] < dp[i][j] + 1 ? dp[i][j + 1] : dp[i][j] + 1;

      for (const problem of problems) {
        let [req_a, req_c, acq_a, acq_c, c] = problem;
        //현재 alp와 cop보다 요구치가 적으면
        if (req_a <= i && req_c <= j) {
          let Nexta = i + acq_a > Maxa ? Maxa : i + acq_a;
          let Nextc = j + acq_c > Maxc ? Maxc : j + acq_c;
          dp[Nexta][Nextc] = dp[Nexta][Nextc] < dp[i][j] + c ? dp[Nexta][Nextc] : dp[i][j] + c;
        }
      }
    }
  }

  return dp[Maxa][Maxc];
}
