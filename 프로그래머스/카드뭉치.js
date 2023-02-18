function solution(cards1, cards2, goal) {
  while (goal.length) {
    if (goal[0] == cards1[0]) {
      goal.shift();
      cards1.shift();
      continue;
    }
    if (goal[0] == cards2[0]) {
      goal.shift();
      cards2.shift();
      continue;
    }
    return 'No';
  }
  return 'Yes';
}
