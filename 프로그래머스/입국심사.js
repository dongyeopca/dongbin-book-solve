function solution(n, times) {
  var answer = 0;
  //n명이 입국심사 대기중
  //times는 각 검사관이 1명을 심사하는데 걸리는 시간
  let left = 1;
  let right = Math.max(...times) * n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = times.reduce((count, cur) => {
      return (count += Math.floor(mid / cur));
    }, 0);

    if (count < n) {
      left = mid + 1;
    } else {
      answer = mid;
      right = mid - 1;
    }
  }

  return answer;
}
