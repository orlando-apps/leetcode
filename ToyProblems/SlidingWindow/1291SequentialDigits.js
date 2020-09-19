// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]


/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */



var sequentialDigits = function(low, high){
  let results = [];
  let digits = '123456789'

  let min = low.toString().length;
  let max = high.toString().length;

  for (let i = min; i <= max; i++){ //if min and max are d/t length, then the 2nd iteration may run again and add repeats
      console.log("------------------------------")
      for (let j = 0; j <= digits.length - i; j++){ // -i make sure the last digit have enough for the length of min
                                                    // if min === 4, then last is "6789",
                                                    // <= makes sure to INCLUDE 6, where <= 10 - 4
          let num = +digits.substring(j, j + i) // + converts to number
          console.log(num,j, digits.length, digits.length - i)
          if ( num >= low && num <= high) results.push(num);
      }
  }
  return results;
}

console.log(sequentialDigits(1000,13000))













//BackTracking method
// var sequentialDigits = function(low, high) {
//   let result = [];
//   search(result, low, high, '', 1)
//   return result.sort((a,b) => a - b)
// };

// var search = function(result, low, high, curr, idx){
//   let num = Number(curr)
//   if (num >= low && num <= high){
//       result.push(num)
//   }
//   for (let i = idx; i < 10; i++){
//       if(curr){
//           let chk = curr[curr.length -1]
//           if ( i !== parseInt(chk) + 1){
//               break;
//           }
//       }
//       search(result, low, high, curr + i, ++idx)
//   }
// }