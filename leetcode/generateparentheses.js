/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answer = [];
  const dfs = (str, open, close) => {
    if (open < 0 || close < 0) {
      return;
    }
    if (!open && !close) {
      answer.push(str);
      return;
    }
    dfs(str + "(", open - 1, close);
    close > open ? dfs(str + ")", open, close - 1) : "";
  };
  dfs("", n, n);
  return answer;
};
