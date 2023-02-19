function solution(t, p) {
  var answer = 0;
  let size = p.length;
  for (let i = 0; i <= t.length - size; i++) {
    if (parseInt(t.slice(i, i + size)) <= parseInt(p)) {
      answer += 1;
    }
  }
  return answer;
}
