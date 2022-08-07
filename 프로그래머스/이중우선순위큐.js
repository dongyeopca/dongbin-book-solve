function solution(operations) {
  var answer = [];
  for (const item of operations) {
    const [order, number] = item.split(" ");
    if (order === "I") {
      answer.push(number);
      answer.sort((a, b) => a - b);
      continue;
    }
    if (order === "D") {
      if (number === "1") {
        answer.pop();
      } else {
        answer.shift();
      }
    }
  }
  if (answer.length == 0) {
    answer = [0, 0];
  } else {
    answer = [Math.max(...answer), Math.min(...answer)];
  }
  return answer;
}
