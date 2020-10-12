// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.



// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2


// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104



/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */



var coinChange = function(coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1) //+1 to the Array because we want to avoid zero-base and use the actual amount
                                              //+1 to fill to make sure it is greater than amount. greater than amount means, did not find a solution.
  dp[0] = 0; //the fewest number of coins to make 0 cents, so 0,
  console.log(dp)
  for (let i = 1; i <= amount; i++){ // <= goes all the way up to amount, ignore zero-base
                                     // i is current amount we want to make.
      for (let j = 0; j < coins.length; j++){
          let coin = coins[j];
          if (coin <= i){
              //let diff =  dp[i-coin]
              //console.log({i, j, coin, diff})
              dp[i] = Math.min(dp[i], 1 + dp[i-coin]) //dp[i] === amount + 1 initial, but it would be updated as it iterates with j
                                                      //dp[i] on the next j iteration could be something else;
                                                      //compare to:
                                                          // we add a coin to each i, so we have to do 1 + for the -coin
                                                          // dp[i-coin] this is a subproblem that we already solved, we get the # of coins from this item
                                                          // dp[i-coin] will always be positive
                                                      //dp[i] will go through the loop and get set as the minimum count taking dp[diff] into consideration.
          }
      }
  }
   return dp[amount] > amount ? -1 : dp[amount]; //if it is the amount, then we did not find a solution.
};


// Time complexity : O(mxn) loop that goes through all the coins x loop that goes thru amount
// Space complexity : O(n) where n is the amount


//this not optimal approach. could potential get suboptimal
//this approach is Greedy
// var coinChange = function(coins, amount) {
//     let result = Infinity;
//     result = search(result, coins, amount)
//     return result === Infinity ? -1 : result;
// };

// var search = function(result, coins, amount, curr = 0, num = 0, update = Infinity){

//     if(curr === amount && num < result ){
//         return num
//     } else if ( curr > amount || num > 21) {
//         return null
//     } else if (update !== Infinity && num > update) {
//         return null
//     } else  {
//         for ( let i = coins.length - 1; i >= 0; i--){
//             if(result !== Infinity){
//                 update = result
//             }
//             let tmp = search(result, coins, amount, curr + coins[i], num + 1, update)
//             if(tmp && result > tmp)  result = tmp;
//         }
//     }
//     return result
// }