function solution(n) {
  var answer = [];
  const hanoi = (n, start, sub, end) => {
    if (n == 1) {
      answer.push([start, end]);
      return;
    } else {
      hanoi(n - 1, start, end, sub);
      answer.push([start, end]);
      hanoi(n - 1, sub, start, end);
    }
  };
  hanoi(n, 1, 2, 3);
  return answer;
}
