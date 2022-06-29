function solution(answers) {
  var answer = [];
  const counter = new Array(3).fill(0);
  let max = 0;
  let type1 = [1, 2, 3, 4, 5];
  let type2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let type3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == type1[i % type1.length]) counter[0] += 1;
    if (answers[i] == type2[i % type2.length]) counter[1] += 1;
    if (answers[i] == type3[i % type3.length]) counter[2] += 1;
  }

  counter.map((e) => (e > max ? (max = e) : e));
  for (let i = 0; i < 3; i++) {
    if (counter[i] == max) {
      answer.push(i + 1);
    }
  }
  return answer;
}
