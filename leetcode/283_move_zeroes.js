var moveZeroes = function (nums) {
  let zero_position = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[zero_position]] = [nums[zero_position], nums[i]];
      zero_position++;
    }
  }
};
