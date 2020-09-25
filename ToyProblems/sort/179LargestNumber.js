// Given a list of non negative integers, arrange them such that they form the largest number.

// Example 1:

// Input: [10,2]
// Output: "210"
// Example 2:

// Input: [3,30,34,5,9]
// Output: "9534330"

// Note: The result may be very large, so you need to return a string instead of an integer.


/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {
  if (nums.every( x => x === 0 )) return '0';

  let sorted = nums.sort((a,b) =>{
      a = a.toString();
      b = b.toString();
      let ab = a + b;
      let ba = b + a;
      if (ab < ba) return 1;
      if (ba < ab) return -1;
  })

  return sorted.join('')
};

// Time complexity : \mathcal{O}(nlgn)O(nlgn)
// Although we are doing extra work in our comparator, it is only by a constant factor. Therefore, the overall runtime is dominated by the complexity of sort, which is \mathcal{O}(nlgn)O(nlgn) in Python and Java.

// Space complexity : \mathcal{O}(n)O(n)
// Here, we allocate \mathcal{O}(n)O(n) additional space to store the copy of nums. Although we could do that work in place (if we decide that it is okay to modify nums), we must allocate \mathcal{O}(n)O(n) space for the final return string. Therefore, the overall memory footprint is linear in the length of nums.

//brute force approach
var largestNumber = function(nums) {
  let len = nums.length;
  let obj = {};
  obj.count = 0;
  search(obj, nums, '', len, 0);
  return obj.count;
};

var search = function(obj,nums, curr, len, idx){
  if (idx === len){
      if (+obj.count < +curr) obj.count = curr;
      return;
  } else{
      for(let i = 0; i < nums.length; i++){
        search (obj, nums.slice(0, i).concat(nums.slice(i + 1)), curr + nums[i], len, idx + 1)
      }
  }
}