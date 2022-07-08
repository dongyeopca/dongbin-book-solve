/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let medium = parseInt((left + right) / 2);
    if (nums[medium] > target) {
      right = medium - 1;
    } else if (nums[medium] < target) {
      left = medium + 1;
    } else {
      return medium;
    }
  }
  if (target > nums[left]) {
    return left + 1;
  } else {
    return left;
  }
};
