function solution(priorities, location) {
  var answer = 0;
  let pointer = location;
  let max = Math.max(...priorities);
  while (priorities.length) {
    let cur = priorities.shift();
    if (pointer == 0) {
      if (cur == max) return answer + 1;
      pointer = priorities.length + 1;
      priorities.push(cur);
    } else if (cur == max) {
      max = Math.max(...priorities);
      answer += 1;
    } else {
      priorities.push(cur);
    }
    pointer -= 1;
  }

  return answer;
}
