var sortedSquares = function (nums) {
  let answer = new Array();
  nums.forEach((item) => {
    answer.push(item ** 2);
  });
  answer.sort((a, b) => a - b);
  return answer;
};
