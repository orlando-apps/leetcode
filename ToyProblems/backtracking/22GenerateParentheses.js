// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function(n) {
  let results = [];
  backtrack(results, '', 0, 0, n)
  return results;
};


var backtrack = (results, curr, open, close, n) => {
  if( curr.length === n*2){
    results.push(curr)
  } else {
    if (open < n) backtrack(results, curr + '(', open + 1, close, n);
    if (close < open) backtrack(results, curr + ')', open, close + 1, n);
  }
}