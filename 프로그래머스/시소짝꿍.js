function solution(weights) {
  var answer = 0;
  let dict = {};
  weights.map((e, index) => {
    dict[e] ? dict[e].push(index) : (dict[e] = [index]);
  });
  const wset = new Set(weights);
  for (const weight of wset) {
    if (dict[(weight * 2) / 3]) {
      answer += dict[weight].length * dict[(weight * 2) / 3].length;
    }
    if (dict[(weight * 2) / 4]) {
      answer += dict[weight].length * dict[(weight * 2) / 4].length;
    }
    if (dict[(weight * 3) / 2]) {
      answer += dict[weight].length * dict[(weight * 3) / 2].length;
    }
    if (dict[(weight * 3) / 4]) {
      answer += dict[weight].length * dict[(weight * 3) / 4].length;
    }
    if (dict[(weight * 4) / 2]) {
      answer += dict[weight].length * dict[(weight * 4) / 2].length;
    }
    if (dict[(weight * 4) / 3]) {
      answer += dict[weight].length * dict[(weight * 4) / 3].length;
    }
    answer += (dict[weight].length * (dict[weight].length - 1)) / 2;
    delete dict[weight];
  }
  return answer;
}
