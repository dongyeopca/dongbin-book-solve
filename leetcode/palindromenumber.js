/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const strx = `${x}`;
  const reversestrx = strx.split("").reverse().join("");
  return strx === reversestrx;
};
