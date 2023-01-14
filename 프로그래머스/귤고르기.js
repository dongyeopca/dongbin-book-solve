//hashtable 문제인듯
//풀이소요시간: 4분

function solution(k, tangerine) {
  var answer = 0;
  let dict = {};
  tangerine.forEach((e) => {
    if (dict[e] == undefined) {
      dict[e] = 1;
    } else {
      dict[e] += 1;
    }
  });
  let temp = Object.entries(dict).sort((a, b) => b[1] - a[1]);
  while (k > 0) {
    k -= temp[answer][1];
    temp[answer][1] = 0;
    answer += 1;
  }
  // dict의 value가 큰것부터 k에서 빼면됨
  return answer;
}
