function solution(n, words) {
  var answer = [];
  //가장 먼저 탈락하는 사람과 그 사람이 자신의 몇번째 차례에 탈락하는지를 구하라.
  let dict = {};
  dict[words[0]] = true;
  let recent = words[0];
  for (let i = 1; i < words.length; i++) {
    if (dict[words[i]] || recent[recent.length - 1] != words[i][0]) {
      //i번째에 걸림
      //탈락한 사람의 순서
      if ((i + 1) % n == 0) {
        answer.push(n);
      } else {
        answer.push(Math.floor((i + 1) % n));
      }
      //몇번 게임이 돌았는지
      if ((i + 1) % n == 0) {
        answer.push(Math.floor((i + 1) / n));
      } else {
        answer.push(Math.floor((i + 1) / n) + 1);
      }
      return answer;
    }
    dict[words[i]] = true;
    recent = words[i];
  }

  return [0, 0];
}
