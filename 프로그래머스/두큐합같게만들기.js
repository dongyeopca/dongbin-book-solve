function solution(queue1, queue2) {
  var answer = 0;
  let con = queue1.concat(queue2).concat(queue1);
  let max = con.length;
  let s1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let i1 = 0;
  let s2 = queue2.reduce((acc, cur) => acc + cur, 0);
  let i2 = queue1.length;
  let distance = Math.abs(s1 - s2);
  console.log(con.slice(0, i2), con.slice(i2));
  //앞에꺼 뺴서 뒤에다가 넣음
  while (distance != 0 && answer <= max) {
    answer += 1;
    if (s1 > s2) {
      s1 -= con[i1];
      s2 += con[i1];
      i1 += 1;
      distance = Math.abs(s1 - s2);
    } else {
      s1 += con[i2];
      s2 -= con[i2];
      i2 += 1;
      distance = Math.abs(s1 - s2);
    }
  }
  if (answer < max) {
    return answer;
  } else {
    return -1;
  }
}
