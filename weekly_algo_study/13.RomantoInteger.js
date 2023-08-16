var romanToInt = function (s) {
  //작은거 뒤에 큰게오면 앞에께 뒤에걸 빼는양식
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let prev = [];
  s = Array.prototype.slice.call(s);
  let counter = 0;
  while (s.length) {
    let target = s.shift();
    if (prev) {
      if (roman[prev[prev.length - 1]] < roman[target]) {
        counter -= roman[prev[prev.length - 1]] * 2;
        counter += roman[target];
        prev.push(target);
        continue;
      }
      prev.push(target);
      counter += roman[target];
    } else {
      prev.push(target);
      counter += roman[target];
    }
  }
  return counter;
};
