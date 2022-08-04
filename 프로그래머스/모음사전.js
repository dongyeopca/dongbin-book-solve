function solution(word) {
  var answer = 0;
  //word가 사전상에 몇번째 단어인가
  let dic = ["A", "E", "I", "O", "U"];
  let cnt = 0;
  function dfs(curr) {
    if (curr == word) {
      answer = cnt;
    }
    if (curr.length >= 5) {
      return;
    }
    for (let i = 0; i < 5; i++) {
      cnt++;
      dfs(curr + dic[i]);
    }
  }
  dfs("");
  return answer;
}
