let fs = require('fs');
let test = true;
let input = fs
  .readFileSync(test ? './test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');

let n = Number(input.shift());
let board = input.map((e) => e.split(' ').map(Number));
let persons = Array(n).fill(0);
persons.map((v, index) => (persons[index] = index));

let chooseMate = function (arr, n) {
  let results = [];
  if (n == 1) return arr.map((e) => [e]);
  arr.forEach((value, index, origin) => {
    let rest = [...origin.slice(index + 1)];
    let combi = chooseMate(rest, n - 1);
    let attach = combi.map((e) => [value, ...e]);
    results.push(...attach);
  });
  return results;
};
//팀 능력치 계산
let calculate = function (team) {
  let scores = [];
  for (let k = 0; k < team.length; k++) {
    let score = 0;
    for (let i = 0; i < n / 2; i++) {
      for (let j = i + 1; j < n / 2; j++) {
        score += board[team[k][i]][team[k][j]];
        score += board[team[k][j]][team[k][i]];
      }
    }
    scores.push(score);
  }
  return scores;
};
// n/2 씩 뽑은 조합 만들기
let team1 = chooseMate(persons, n / 2);
let team2 = team1.map((e) => persons.filter((p) => !e.includes(p)));

let team1_score = calculate(team1);
let team2_score = calculate(team2);
console.log(Math.min(...team1_score.map((e, index) => Math.abs(e - team2_score[index]))));
