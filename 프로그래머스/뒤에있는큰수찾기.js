function solution(numbers) {
  var answer = new Array(numbers.length).fill(-1);
  let stack = [];
  numbers.forEach((item, index) => {
    while (true) {
      if (stack.length) {
        if (stack[stack.length - 1][0] < item) {
          answer[stack.pop()[1]] = item;
          continue;
        }
      }
      break;
    }
    stack.push([item, index]);
  });
  return answer;
}
