function solution(storey) {
  var answer = Infinity;
  let sstorey = storey.toString();
  let l = sstorey.length;
  dfs(l - 1, 0, 0);
  function dfs(index, score, checker) {
    if (index == -1) {
      answer = Math.min(answer, score + checker);
      return;
    }
    let num = Number(sstorey[index]) + checker;
    dfs(index - 1, score + num, 0);
    dfs(index - 1, score + 10 - num, 1);
  }
  return answer;
}
