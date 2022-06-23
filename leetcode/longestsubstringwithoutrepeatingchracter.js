/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  answer = [];
  for (let i = 0; i < s.length; i++) {
    const substring = [s[i]];
    for (let j of s.slice(i + 1)) {
      if (substring.includes(j)) {
        answer.push(substring.length);
        break;
      } else {
        substring.push(j);
      }
    }
    answer.push(substring.length);
  }
  if (answer.length) {
    return Math.max(...answer);
  } else {
    return 0;
  }
};
