// There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

// Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

// Note:

// If there exists a solution, it is guaranteed to be unique.
// Both input arrays are non-empty and have the same length.
// Each element in the input arrays is a non-negative integer.
// Example 1:
// Input:
// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]

// Output: 3

// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.


// Example 2:
// Input:
// gas  = [2,3,4]
// cost = [3,4,3]

// Output: -1

// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// Therefore, you can't travel around the circuit once no matter where you start.



/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// O(n) Time
// We do not have to do the next simulation of i + 1, if the prev simulation showed that i + 1 passed. This is because i + 1 would have either 0 or surplus gas. Assuming 0 and it was still good, then, we can say that i + 1 is not dependent on i. if there was a surplus, then starting at i + 1 is worst than i. Either case, i or i + 1 would not make the trip.
// check the simulation after the break; How do we know the portions of the trip we have traverse are still good, when we loop back around? we can precalculate the sums and guarantee sure there is a possible valid path.

var canCompleteCircuit = function(gas, cost) {
  let gasTotal = gas.reduce((acc, x) => acc + x);
  let costTotal = cost.reduce((acc, x) => acc + x);
  if (gasTotal < costTotal) return -1
  let tank = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++){
      tank += gas[i] - cost[i]
      if (tank < 0) {
          tank = 0;
          start = i + 1 //set to the next one, until we find first one isn't in deficit.
      }
  }
  return start
}


//O(n^2) Time
// var canCompleteCircuit = function(gas, cost) {
//     let len = gas.length;
//     let complete = true;
//     let tank = 0;
//     for (let i = 0; i < len; i++){
//         tank = 0;
//         complete = true;
//         for (let j = 0; j <= len; j++){ // = +1 here to make sure we go back to the starting point.
//             let station = (i + j) % len; // allows us to go back around, since we are getting a reminder of result divided by total.
//             tank = tank + gas[station] - cost[station]
//             if (tank < 0) {
//                 complete = false;
//                 break;
//             }
//         }
//         if (complete) return i;
//     }
//     return -1
// };