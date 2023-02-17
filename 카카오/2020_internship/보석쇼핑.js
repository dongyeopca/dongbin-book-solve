function solution(gems) {
  var answer = [];
  let kinds = new Set(gems);
  let counter = new Map();
  let left = 0;
  let min = Infinity;
  gems.forEach((gem, right) => {
    counter.get(gem) ? counter.set(gem, counter.get(gem) + 1) : counter.set(gem, 1);
    while (counter.size == kinds.size && left <= right) {
      counter.set(gems[left], counter.get(gems[left]) - 1);
      if (counter.get(gems[left]) == 0) {
        counter.delete(gems[left]);
      }
      if (min > right - left) {
        answer = [left + 1, right + 1];
        min = right - left;
      }
      left += 1;
    }
  });
  return answer;
}
