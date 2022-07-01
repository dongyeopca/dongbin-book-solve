function solution(numbers, target) {
  var answer = 0;
  const operator = ["+", "-"];

  const dfs = function (numbers, value) {
    if (numbers.length == 0) {
      if (value == target) {
        answer++;
      }
      return;
    }
    let a = numbers.shift();
    for (let i = 0; i < 2; i++) {
      dfs([...numbers], value + Number(operator[i] + a));
    }
  };
  dfs([...numbers], 0);
  console.log(answer);
  return answer;
}
