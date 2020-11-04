// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b


// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
// Example 3:

// Input: nums = []
// Output: []
// Example 4:

// Input: nums = [-1]
// Output: ["-1"]
// Example 5:

// Input: nums = [0]
// Output: ["0"]


// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.

/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
  let result = [];
  let [start, end] = [nums[0], nums[0]]
  for (let i = 1; i <= nums.length; i++){ //this is always 1 behind, b/c the push is implemented on the previous (start, end) after finding out the end + 1 is not a match. Then start and end needs to be updated, but is not pushed until the next loop.
      let num = nums[i]
      if (end + 1 === num){
          end = num
      } else {
          start === end ? result.push(start +'') : result.push(start + '->' + end);
          [start, end] = [num, num];
      }
  }

  return result;
};