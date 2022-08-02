function solution(s) {
  var answer = true;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      cnt++;
    } else {
      if (cnt == 0) {
        return false;
      } else {
        cnt--;
      }
    }
  }
  if (cnt != 0) {
    return false;
  }
  return answer;
}
