function solution(number) {
  var answer = 0;
  //조합문제 number에서 3개를 뽑아서 합이 0이 되면 answer++
  combination(number, 3).map((e) => {
    if (
      e.reduce((acc, curr) => {
        return acc + curr;
      }) === 0
    ) {
      answer++;
    }
  });
  return answer;
}

function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}
