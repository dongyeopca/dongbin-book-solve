function solution(n) {
  var answer = n + 1;
  const translator = (a, b) => {
    let a_1 = a
      .toString(2)
      .split('')
      .filter((e) => e == '1').length;
    let b_1 = b
      .toString(2)
      .split('')
      .filter((e) => e == '1').length;
    if (a_1 == b_1) return true;
    return false;
  };
  while (!translator(n, answer)) {
    answer += 1;
  }
  return answer;
}
