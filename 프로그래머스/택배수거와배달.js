function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  const rdeliveries = deliveries.reverse();
  const rpickups = pickups.reverse();
  let dc = deliveries.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  let pc = pickups.reduce((acc, cur) => acc + cur, 0);
  //n-index가 이동거리
  // for(let i=0; i<n; i++){
  let i = 0;
  while (true) {
    if (i == n) {
      return answer;
    }
    if (rdeliveries[i] || rpickups[i]) {
      // console.log(i,'rd',rdeliveries,'rp',rpickups)
      answer += (n - i) * 2;
      let pointer = i;
      let left = cap;
      while (dc && left > 0 && pointer < n) {
        if (rdeliveries[pointer] > 0) {
          left -= 1;
          rdeliveries[pointer] -= 1;
          dc -= 1;
        } else {
          pointer += 1;
        }
      }
      left = cap;
      pointer = i;
      while (pc && left > 0 && pointer < n) {
        if (rpickups[pointer] > 0) {
          rpickups[pointer] -= 1;
          left -= 1;
          pc -= 1;
        } else {
          pointer += 1;
        }
      }
    } else {
      i += 1;
    }
  }
}
