/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = ("" + x).split("");
  let minus = false;
  var answer;
  if (str[0] == "-") {
    minus = true;
    str.shift();
  }
  if (minus) {
    answer = Number("-" + str.reverse().join(""));
  } else {
    answer = Number(str.reverse().join(""));
  }

  if ((-2) ** 31 <= answer && answer <= 2 ** 31 - 1) {
    return answer;
  } else {
    return 0;
  }
};
