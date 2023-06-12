function solution(targets) {
  var answer = 0;
  let last = -1;
  targets.sort((a, b) => a[1] - b[1]);
  for (const target of targets) {
    const [start, end] = target;
    if (last <= start) {
      last = end;
      answer += 1;
    }
  }
  return answer;
}
