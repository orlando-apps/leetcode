// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let curr = nums[0];
  let min_so_far = nums[0];
  let max_so_far = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++ ){
    // pick curr, if accumulated product has been bad (same as kadane)
    // pick min_so_far, if combo chain has been reverted back to positive
    // pick max_so far, if accumulated product has been steadily increasing (same as kadane)
    curr = nums[i];
    min_so_far = min_so_far * nums[i];
    max_so_far = max_so_far * nums[i];
    //use tmp to avoid changing max_so_far and min_so_far values
    let minTmp = Math.min(max_so_far, min_so_far, curr);
    let maxTmp = Math.max(max_so_far, min_so_far, curr);

    max_so_far = maxTmp;
    min_so_far = minTmp;

    result = Math.max(max_so_far, result);
  }

  return result;
};