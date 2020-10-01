// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Follow up:

// Your algorithm should run in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let containsOne = false;
  let len = nums.length;
  for (let i = 0; i < len; i++){
    let num = nums[i]
    if(num === 1){
        containsOne = true;
    } else if(num <= 0 || num > len){
        nums[i] = 1 //convert all negative and numbers out of len range to 1 b/c min positive number can only be in range of the array length. And 1 is the minimum possible positive value.
    }
  }

  if(!containsOne) return 1 // if 1 is not present, min positive is 1.

  for (let i = 0; i < len; i++){
    let idx = Math.abs(nums[i]) - 1 //need to abs, if we already convert to negative
                                    // -1 for zero based array
                                    //  if it is 1 or -1, then 1 - 1 = 0, updates num[0] to neg
                                    // at this point we know 1(num[0]) is not answer, we don't care about 1 or -1
    if (nums[idx] > 0) {
        nums[idx] = -1 * nums[idx] //make numbers that inclusive of array range to negative
    }                              // we know that if it is neg, than we can signify its okay
  }                                  // we do not change the value, just make it negative

  for (let i = 0; i < len; i++){
    let num = nums[i];
    if(num > 0) return i + 1 //first number that is not neg is missing number
  }

  return len + 1
};