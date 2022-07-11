/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let temp = s.split(" ");
  let reversed = temp.map((e) => {
    return e.split("").reverse().join("");
  });
  return reversed.join(" ");
};
