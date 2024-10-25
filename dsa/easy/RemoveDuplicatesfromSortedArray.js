/**
 * Problem Description:
 * Given a sorted array nums, remove the duplicates in-place such that each element
 * appears only once and returns the new length. The relative order of the elements
 * should be kept the same.
 *
 * Example:
 * Input: nums = [0,1,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *
 * Approach:
 * 1. Use two-pointer technique
 * 2. First pointer (k) keeps track of position for next unique element
 * 3. Second pointer (i) iterates through array
 * 4. When we find a new number, place it at k position
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - in-place modification
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Edge case: empty array
  if (nums.length === 0) return 0;

  let k = 1; // Start from 1 as first element is always unique

  // Iterate through array starting from second element
  for (let i = 1; i < nums.length; i++) {
    // If current number is different from previous
    if (nums[i] !== nums[i - 1]) {
      // Place current number at k position
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
