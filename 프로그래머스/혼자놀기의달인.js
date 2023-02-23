function solution(cards) {
  let startIndex = 0;
  let temp = [];
  while (startIndex >= 0) {
    temp.push(dfs(startIndex, 0));
    startIndex = cards.findIndex((e) => e != 0);
  }
  temp.sort((a, b) => b - a);
  if (temp.length == 1) {
    return 0;
  }
  return temp[0] * temp[1];

  function dfs(box_number, depth) {
    if (cards[box_number] == 0) {
      return depth;
    }
    let value = cards[box_number];
    cards[box_number] = 0;
    return dfs(value - 1, depth + 1);
  }
}
