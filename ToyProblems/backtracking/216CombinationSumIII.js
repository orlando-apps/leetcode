// Example 1:
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:
// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function(k, n) {
  let result = [];
  search (k, result, n, [], 1)
  return result
};

var search = function ( limit, result, target, curr, idx){
  if (curr.length === limit){
      if (target === 0){
          result.push(curr)
      }
  } else if (target > 0) {
      for (let i = idx; i < 10; ++i){
          search(limit, result, target - i, curr.concat(i), ++idx)
      }
  }
}

//  var combinationSum3 = function(k, n) {
//   let result = [];
//   search (k, result, n, [], 1, 0)
//   return result
// };

// var search = function ( limit, result, target, curr, idx, sum){
//   if (curr.length === limit){
//       if (sum === target){
//           result.push(curr)
//       }
//   } else if (sum < target) {
//       for (let i = idx; i < 10; ++i){
//           search(limit, result,target, curr.concat(i), ++idx, sum + i)
//       }
//   }
// }