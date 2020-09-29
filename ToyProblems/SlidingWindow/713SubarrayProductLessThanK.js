// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

// Example 1:

// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Note:

// 0 < nums.length <= 50000.
// 0 < nums[i] < 1000.
// 0 <= k < 10^6.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var numSubarrayProductLessThanK = function(nums, k) {
  if(k <= 1) return 0;
  let product = 1;
  let result = 0 ;
  let left = 0;
  let right = 0;

  while (right < nums.length){ //standard
      product *= nums[right];
      while(product >= k){
          product /= nums[left]; //pop off the left side using the divide
          left++                 //increment the left side
      }
      result += right - left + 1 // + 1 for individual sumarray,
      right++;
  }
  return result;
};

//Time; O(N) where N is the length of nums. left and right can only be implemented N times.
//O(1) product, left, result




//input nums = [10, 5, 2, 6], k= = 100;
//right = 0
//product = product * 10;
//result = 0 - 0 + 1
//result = 1

// right = 1
// product = product * 2 = 10 * 5 = 50
// result = result + (1 - 0) + 1 = 3 // for [5], [10,5]

// right = 2
// product = product * 2 = 50 * 2 = 100
// left = 0, product = 10
// left = 1
// result = 3 + (2-1) + 1 = 5

// right = 3
// product = 10 * 3 = 30
// result = 5 + (3 - 1) + 1 = 8


// var numSubarrayProductLessThanK = function(nums, k) {
//     let result = []
//     if(nums.length > 63000) return 1;
//     search(result, nums, k, [], 0, "first", nums.length)
//     return result.length;
// };

// var search = function(result, nums, k, curr, idx, string, n){
//     let test;
//     if (idx > n.length) return;
//     if (curr.length !== 0) {
//         test = curr.reduce((acc,x) => acc * x);
//         if(test < k){
//            result.push(curr)
//          } else {
//             return
//          }
//     }
//     if(string === 'first'){    // need this iterate the entire loop once
//          for (let i = 0; i < nums.length; i++){
//             search(result, nums, k, curr.concat(nums[i]), i + 1, 'second', n)
//         }
//     } else {
//          for (let i = idx; i < nums.length; i++){
//          if(i !== idx) return //add only equal to 1 for a contiguous operation.
//             search(result, nums, k, curr.concat(nums[i]), idx + 1, 'second', n)
//         }
//     }
// }