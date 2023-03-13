function solution(s) {
  var answer = [0, 0];
  const removeZero = (s) => {
    let total = s.length;
    let one = s.split('').filter((e) => e != '0').length;
    answer[0] += 1;
    answer[1] += total - one;
    return one.toString(2);
  };
  while (true) {
    s = removeZero(s);
    if (s == '1') {
      return answer;
    }
  }
}
