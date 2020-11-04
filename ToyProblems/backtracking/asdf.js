// Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.



// Example 1:

// Input: A = [4,5,0,-2,-3,1], K = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by K = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]


// Note:

// 1 <= A.length <= 30000
// -10000 <= A[i] <= 10000
// 2 <= K <= 10000


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let obj = {}
  obj.count = 0;
  for (let i = 0; i < A.length; i++){
      search(obj, A, K, A[i], i+1)
  }
  return obj.count
};

var search = function(obj, A, K, sum, index){
  if ( sum % K === 0){
      obj.count++
  }

  if (index === A.length) return; // always +1 ahead, but the above code will check the last one in the array.


  search(obj, A, K, sum+ A[index], index + 1)
}

//non optimal solution!!!!!
//practice for backtracking type problems.