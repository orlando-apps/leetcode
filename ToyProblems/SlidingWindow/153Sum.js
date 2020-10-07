// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  result =[]
  nums.sort((a,b) => a - b)
  for (let i = 0; i < nums.length; i++){
      let low = i + 1
      let high = nums.length - 1

      if(nums[i] === nums[i-1]) continue;
      if (nums[i] > 0) break;
      while (low < high ){
          let sum = nums[i] + nums[low] + nums[high]
          if(sum === 0){
              result.push([nums[i], nums[low++], nums[high--]])
              while (low < high && nums[low] == nums[low - 1] ){
                  low++
              }
          } else if ( sum < 0){
              low++
          } else {
              high--
          }
      }
  }
  return result
};

// Time: O(n2)
//Space Complexity: O(log n) to O(n) depending on sorting algrothim



//Javascript sor