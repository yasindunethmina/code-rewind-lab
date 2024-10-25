/**
 * Problem Description:
 * Given an integer array nums and a value val, remove all instances of val in-place
 * and return the new length. The order of elements can be changed.
 *
 * Example:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,3,0,4,_,_,_]
 *
 * Approach:
 * 1. Use two-pointer technique
 * 2. First pointer (k) keeps track of position for next valid element
 * 3. Second pointer (i) iterates through array
 * 4. When we find a number != val, place it at k position
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - in-place modification
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // Initialize k to track position for next valid element
  let k = 0;

  // Iterate through array
  for (let i = 0; i < nums.length; i++) {
    // If current number is not the value to remove
    if (nums[i] !== val) {
      // Place current number at k position
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
