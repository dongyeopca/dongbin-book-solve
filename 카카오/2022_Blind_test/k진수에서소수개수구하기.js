function solution(n, k) {
  var answer = 0;
  //k진수로 바꾸기
  let transed = n.toString(k);
  function check(value) {
    if (value == 1 || (value != 2 && value % 2 == 0)) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(value); i++) {
      if (value % i == 0) return false;
    }
    return true;
  }
  for (const i of transed.split('0')) {
    if (check(Number(i))) {
      answer += 1;
    }
  }
  return answer;
}

//양의 정수n, k진수로 바꿈
//0P0
