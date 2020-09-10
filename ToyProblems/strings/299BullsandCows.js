// Example 1:
// Input: secret = "1807", guess = "7810"
// Output: "1A3B"
// Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.

// Example 2:
// Input: secret = "1123", guess = "0111"
// Output: "1A1B"
// Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.


/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

var getHint = function(secret, guess) {
  let cows = 0;
  let bulls = 0;
  let obj = {};
  for (let i = 0; i < secret.length; i++){
    let g = guess[i];
    let s = secret[i];
    if (g === s){
        bulls++;
    } else {
      if (!obj[s]){
          obj[s] = 1;
      } else {
          obj[s]++;
      }
    }
  };

  for (let i = 0; i < guess.length; i++){
    let g = guess[i];
    let s = secret[i];
    if (g !== s && obj[g]){
      cows++
      obj[g]--
    }
  }
  return `${bulls}A${cows}B`
};