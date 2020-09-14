
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  //edge case, no tuple in intervals
  if (!intervals.length) return [newInterval]

  const result = [];
  let newFirst = newInterval[0];
  let newLast = newInterval[1];

  while (intervals.length){
      const [first, last] = intervals.shift();

      //tuple is below and outside of newInterval
      //no <= b/c if same number, will not push and goes to overlap senario
      if (last < newFirst){
          result.push([first, last])

      // overlap senario
      // we know that [first **newFirst is inside here** last]
      // keep overwriting, until we find a first > newLast.
      // keep the < && = b/c we want to catch same number.
      } else if (first <= newLast ){
          newFirst = Math.min(first, newFirst);
          newLast = Math.max(last, newLast);

      //tuple is above and outside of newInterval
      } else{
          result.push([newFirst, newLast], [first, last], ...intervals);
          return result;
      }
  }

  //edge case, newinterval is above and outside interval
  result.push([newFirst, newLast])
  return result;
};