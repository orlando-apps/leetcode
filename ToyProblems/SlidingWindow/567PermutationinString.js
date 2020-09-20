// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.


// Example 1:

// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False

// Constraints:

// The input strings only contain lower case letters.
// The length of both given strings is in range [1, 10,000].




/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//back tracking - brute force
var checkInclusion = function(s1, s2) {
  if( s1.length > s2.length) return false
  return search(s1.length, s1, s2, '', 0)
};

var search = function (len,s1, s2, curr, idx){
  if(len === curr.length){
      if (s2.indexOf(curr) !== -1) {
          return true
      }
  } else{
      for (let i = 0; i < s1.length; i++){
         let tmp = s1.slice(0,i) + s1.slice(i + 1)
         let bool = search(len, tmp, s2, curr + s1[i])
         if(bool){
             return true
         }
      }
  }
  return false
}
// from leetcode solutions:
// Time complexity : O(n!)
//   We match all the permutations of the short string s1s1, of length s1s1, with s2s2. Here, nn refers to the length of s1s1.

// Space complexity : O(n^2)
//   The depth of the recursion tree is nn(nn refers to the length of the short string s1s1). Every node of the recursion tree contains a string of max. length nn.