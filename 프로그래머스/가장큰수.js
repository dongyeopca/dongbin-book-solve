function solution(numbers) {
  var answer = "";
  answer = numbers
    .sort((a, b) => {
      return "" + b + a - ("" + a + b);
    })
    .join("");
  if (answer[0] == 0) {
    return "0";
  }
  return answer;
}
