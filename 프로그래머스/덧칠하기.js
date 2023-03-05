function solution(n, m, section) {
  var answer = 0;
  //
  let index;
  while (section.length) {
    let index = section.shift();
    let flag = true;
    for (let i = 0; i < section.length; i++) {
      if (section[i] >= index + m) {
        flag = false;
        section.splice(0, i);
        break;
      }
    }
    if (flag) {
      return answer + 1;
    }
    answer += 1;
  }
  return answer;
}
