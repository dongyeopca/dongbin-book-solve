function solution(arr) {
  let answer = [];
  for (const item of arr) {
    if (answer[answer.length - 1] != item) {
      answer.push(item);
    }
  }
  return answer;
}
