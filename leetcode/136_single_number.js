/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let dict = {};
  nums.forEach((i) => {
    if (dict[i]) {
      dict[i] = false;
    } else {
      dict[i] = true;
    }
  });
  for (const i in dict) {
    if (dict[i]) {
      return i;
    }
  }
};
