// Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.
// Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.
// Could you do this in O(n) runtime?

// Example:
// Input: [3, 10, 5, 25, 2, 8]
// Output: 28
// Explanation: The maximum result is 5 ^ 25 = 28.




/**
 * @param {number[]} nums
 * @return {number}
 */

 //Brute Force
var findMaximumXOR = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++){
      for(let j = i+1; j < nums.length; j++){
          let tmp = nums[i] ^ nums[j]
          result = Math.max (tmp, result)
      }
  }
  return result;
};