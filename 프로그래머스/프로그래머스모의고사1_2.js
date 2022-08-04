function solution(order) {
  var answer = 0;
  let v = [];
  let truck = [];
  let index = 0;
  for (let i = 1; i <= order.length; i++) {
    v.push(i);
    while (
      v.length != 0 &&
      index < order.length &&
      v[v.length - 1] == order[index]
    ) {
      truck.push(v.pop());
      index++;
    }
  }
  answer = truck.length;
  return answer;
}
