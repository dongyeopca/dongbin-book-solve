function solution(n) {
  var answer = [0, 1, 2];
  //1로 놓을지 2로 놓을지
  //dfs 시간초과
  // const dfs = (width)=>{
  //     if(width ==0){
  //         answer++;
  //         return
  //     }
  //     if(width>1){
  //         dfs(width-2);
  //     }
  //     dfs(width-1);
  // }
  // dfs(n);
  // return answer;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }
  return dp[n];
}
