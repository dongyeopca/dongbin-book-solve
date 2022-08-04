function solution(citations) {
  var answer = 0;
  let max = Math.max(...citations);
  for (let i = 0; i < max + 1; i++) {
    let cnt = citations.filter((e) => e >= i).length;
    if (cnt >= i) {
      answer = Math.max(answer, i);
    }
  }
  return answer;
}
