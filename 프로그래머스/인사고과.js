function solution(scores) {
  var answer = 1;
  //둘다 모두 낮은 경우가 있으면 인센티브 못받음
  let target_score = scores[0][0] + scores[0][1];
  let target = scores[0];
  scores.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
  let least_peer = 0;
  for (const score of scores) {
    if (target[0] < score[0] && target[1] < score[1]) {
      return -1;
    }
    if (least_peer <= score[1]) {
      if (target_score < score[0] + score[1]) {
        answer += 1;
      }
      least_peer = score[1];
    }
  }

  return answer;
}
