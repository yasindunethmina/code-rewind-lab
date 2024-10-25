/**
 * Problem Description:
 * Given an array nums of length 2n, where the first n elements are x[i] and the last n
 * elements are y[i], return the array in the form [x1,y1,x2,y2,...,xn,yn].
 *
 * Example:
 * Input: nums = [2,5,1,3,4,7], n = 3
 * Output: [2,3,5,4,1,7]
 * Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7]
 *
 * Approach:
 * 1. Split array into two halves using slice
 * 2. First half (x): elements from 0 to n-1
 * 3. Second half (y): elements from n to end
 * 4. Create new ordering by alternating elements from x and y
 * 5. Modify original array in-place using loop
 *
 * Time Complexity: O(n) - single pass through half the array
 * Space Complexity: O(n) - storing two temporary arrays x and y
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  // Split array into two halves
  const x = nums.slice(0, n); // First n elements
  const y = nums.slice(n); // Last n elements

  // Reconstruct array with alternating elements
  for (let i = 0; i < n; i++) {
    nums[i * 2] = x[i]; // Even indices get x elements
    nums[i * 2 + 1] = y[i]; // Odd indices get y elements
  }

  return nums;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); // [1,4,2,3,3,2,4,1]
