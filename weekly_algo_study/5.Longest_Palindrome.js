/**
 * @param {string} s
 * @return {string}
 */
const checker = (s, length) => {
  let mid = Math.floor(length / 2);
  if (length % 2 == 0) {
    if (s.slice(0, mid).reverse().toString() == s.slice(mid).toString()) {
      return true;
    }
    return false;
  }
  if (s.slice(0, mid).reverse().toString() == s.slice(mid + 1).toString()) {
    return true;
  }
  return false;
};
var longestPalindrome = function (s) {
  let answer = [];
  let cur_length = -1;
  s = Array.prototype.slice.call(s);
  for (let start = 0; start < s.length; start++) {
    //시작점
    for (let end = s.length - 1; end >= start; end--) {
      //끝점
      let length = end - start + 1;
      console.log(length);
      if (length < cur_length) break;
      let sliced = s.slice(start, end + 1);
      console.log(sliced);
      // console.log(sliced)
      if (checker(sliced, length)) {
        answer.push(sliced);
        cur_length = length;
        break;
      }
    }
  }
  answer.sort((a, b) => b.length - a.length);
  console.log(answer);
  return answer[0].join('');
};
longestPalindrome('a');
