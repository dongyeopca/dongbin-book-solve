function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  //모든 트럭이 다리를 건너려면 몇초가 걸리는가?
  //다리에는 length만큼 트럭이 올라갈수있고 weight만큼 무게를 견딜수있다.
  let bridge = new Array(bridge_length).fill(0);
  while (truck_weights.length != 0) {
    bridge.shift();
    if (
      bridge.reduce((accumulate, curr) => accumulate + curr) +
        truck_weights[0] <=
      weight
    ) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
    answer++;
  }
  answer += bridge.length;
  return answer;
}
