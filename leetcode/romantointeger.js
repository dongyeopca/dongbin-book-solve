/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let answer = 0;
  let hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let stack = [];
  let current = 0;
  for (let i of s) {
    if (stack.length) {
      console.log(hash[stack[stack.length - 1]], hash[i]);
      if (hash[stack[stack.length - 1]] < hash[i]) {
        answer += hash[i] - hash[stack[stack.length - 1]];
        answer -= current;
      } else {
        answer += hash[i];
        current = hash[i];
      }
    } else {
      answer += hash[i];
      current = hash[i];
    }
    stack.push(i);
  }
  return answer;
};
