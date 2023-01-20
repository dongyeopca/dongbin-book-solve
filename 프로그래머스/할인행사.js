function solution(want, number, discount) {
  var answer = 0;
  let dict = {};
  for (let start = 0; start <= discount.length - 10; start++) {
    discount.slice(start, start + 10).filter((x) => {
      if (want.includes(x)) {
        dict[x] ? (dict[x] += 1) : (dict[x] = 1);
      }
    });
    let flag = false;
    for (let index in want) {
      if (dict[want[index]] != number[index]) {
        flag = true;
        break;
      }
    }
    if (!flag) answer += 1;
    dict = {};
  }

  return answer;
}
