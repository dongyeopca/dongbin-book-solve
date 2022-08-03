function solution(k, dungeons) {
  var answer = 0;
  let visited = new Array(dungeons.length).fill(false);
  dfs(k, 0);
  function dfs(left, cnt) {
    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i] == false && dungeons[i][0] <= left) {
        visited[i] = true;
        dfs(left - dungeons[i][1], cnt + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}
