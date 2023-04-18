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

//가장 적은 비용으로 수거와 배달을 마쳐야한다.
function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  let i = n - 1;
  while (i > -1) {
    while (true) {
      if (!deliveries[i] && !pickups[i]) {
        i -= 1;
        break;
      }
      let cur = i;
      let temp = cap;
      //배송
      for (let j = cur; j > -1; j--) {
        if (deliveries[j] > temp) {
          deliveries[j] = deliveries[j] - temp;
          break;
        }
        temp -= deliveries[j];
        deliveries[j] = 0;
      }
      //수거
      temp = cap;
      for (let j = cur; j > -1; j--) {
        if (pickups[j] > temp) {
          pickups[j] = pickups[j] - temp;
          break;
        }
        temp -= pickups[j];
        pickups[j] = 0;
      }
      answer += (cur + 1) * 2;
    }
  }
  return answer;
}

//3트
//가장 적은 비용으로 수거와 배달을 마쳐야한다.
function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let give = 0;
  let pickup = 0;
  for (let i = n - 1; i > -1; i--) {
    let distance = 0;
    while (give < deliveries[i] || pickup < pickups[i]) {
      distance += i + 1;
      give += cap;
      pickup += cap;
    }
    give -= deliveries[i];
    pickup -= pickups[i];
    answer += distance * 2;
  }
  return answer;
}
