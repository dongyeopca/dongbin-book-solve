function solution(priorities, location) {
  var answer = 0;
  //대기목록내에 가장 앞에 있는 애보다 중요도가 높은 문서가 존재하면 대기목록 마지막으로 넣음
  //내가 요청한 문서가 몇번째로 인쇄되는가?
  let index = location;
  while (true) {
    if (Math.max(...priorities) == priorities[0]) {
      //출력단이 가장 크면
      if (index == 0) {
        return answer + 1;
      }
      priorities.shift();
      index--;
      answer++;
    } else {
      priorities.push(priorities.shift());
      if (index == 0) {
        index += priorities.length - 1;
      } else {
        index--;
      }
    }
  }
  return answer;
}
