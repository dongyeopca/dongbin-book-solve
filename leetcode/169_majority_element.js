/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let target = parseInt(nums.length / 2);
  const counter = {};
  nums.forEach((e) => {
    if (counter[e] != undefined) {
      counter[e] += 1;
    } else {
      counter[e] = 1;
    }
  });
  for (const i in counter) {
    if (counter[i] > target) {
      return i;
    }
  }
};
