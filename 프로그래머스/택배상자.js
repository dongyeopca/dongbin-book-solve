function solution(order) {
  var answer = 0;
  const stack = [];
  let box = 1;
  for (let value of order) {
    let flag = false;
    while (true) {
      if (stack.length == 0) {
        stack.push(box++);
      }
      if (value > stack.at(-1)) {
        stack.push(box++);
      } else if (value == stack.at(-1)) {
        stack.pop();
        answer += 1;
        flag = true;
        break;
      } else {
        break;
      }
    }
    if (!flag) {
      return answer;
    }
  }

  return answer;
}
