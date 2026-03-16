/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

  const countMap = new Map();

  for (let num of nums) {
    if (countMap.has(num)) {
      return true;
    } else {
      countMap.set(num, 1);
    }
  }

  return false;

};


//------ 1회차 풀이 -------
/*
var containsDuplicate = function (nums) {
  let arrToSet = new Set(nums);

  const originalLength = nums.length;
  const filteredLength = arrToSet.size;

  if (originalLength === filteredLength) {
    return false; // 겹치는 숫자가 없는 경우
  } else {
    return true; // 겹치는 숫자가 있는 경우
  }

};
*/

