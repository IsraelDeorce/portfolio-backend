/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const binarySearchIterative = (nums, target) => {
  let start = 0, end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return true
    if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
}

const binarySearchRecursive = (nums, target, start, end) => {
  if (start < end) return false;
  const mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) return true;
  if (nums[mid] < target) return binarySearchRecursive(nums, target, mid + 1, end);
  else return binarySearchRecursive(nums, target, start, mid - 1);
}

// ===============================================================
// Given an array of integers nums sorted in non-decreasing order, find the starting
// and ending position of a given target value.

const searchRange = (nums, target) => {
  const result = []
  result.push(findFirst(nums, target));
  result.push(findLast(nums, target));
  return result;
};

const findFirst = (nums, target) => {
  let start = 0, end = nums.length - 1, res = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) start = mid + 1;
    else if (nums[mid] > target) end = mid - 1;
    else {
      res = mid;
      end = mid - 1;
    }
  }
  return res;
}

const findLast = (nums, target) => {
  let start = 0, end = nums.length - 1, res = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) start = mid + 1;
    else if (nums[mid] > target) end = mid - 1;
    else {
      res = mid;
      start = mid + 1;
    }
  }
  return res;
}

// ========================================================

// binarySearchIterative([5,7,7,8,8,10], 8)
binarySearchRecursive([5,7,7,8,8,10], 8, 0, 5)
// searchRange([5,7,7,8,8,10], 8);
