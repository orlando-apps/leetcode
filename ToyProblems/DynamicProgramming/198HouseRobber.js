// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.


// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400


/**
 * @param {number[]} nums
 * @return {number}
 */



//top - down recusive
var rob = function(nums) {
  //three senarios
  //1) n = 1, num[i]
  //2) n = 2, max(num[i], nums[i-1]) ===> prevMax
  //3) n = 3, max(senario(1) + nums[i], senario(2))  ==> formula

  return compute (nums, nums.length -1 )

};

var compute = function(nums , i){
  if (i < 0) {
    return 0;
  } else {
    return Math.max( compute(nums, i - 2) + nums[i], compute(nums, i - 1));
  }
}


var rob = function(nums) {
  if (!nums.length) return 0;
  const len = nums.length;
  const dp = new Array(len)

  for (let i = 0; i < nums.length; i++){
    //three senarios
    //1) n = 1, num[i]
    //2) n = 2, max(num[i], nums[i-1]) ===> prevMax
    //3) n = 3, max(senario(1) + nums[i], senario(2))  ==> formula
    dp[i] =  Math.max ( (dp[i - 2] || 0) + nums[i], dp[i-1] || 0)
  }

  return dp[len - 1]
};

var rob = function(nums) {
  //three senarios
  //1) n = 1, num[i]
  //2) n = 2, max(num[i], nums[i-1]) ===> prevMax
  //3) n = 3, max(senario(1) + nums[i], senario(2))  ==> formula

  let prevMax = 0;
  let currMax = 0;
  for (let i = 0; i < nums.length; i++){
      let tmp = currMax
      currMax = Math.max(prevMax + nums[i] , currMax)
      prevMax = tmp;
  }
  return currMax
};


// rob( [2,1,1,2] )
// prevMax: 0
// currMax: 0
// currMax = Math.max (0 + 2, 0) ==> 2 Take the first one, prevMax = 0
// currMax = Math.max (0 + 1, 2) ==> 2 Take the first one, prevMax = 2
// currMax = Math.max (2 + 1, 2) ==> 3 Take the New one, prevMax = 2
// currMax = Math.max (2 + 2, 3) ==> 4 Take the New one, prevMax = 3



// O(1) Space
// O(n) Time