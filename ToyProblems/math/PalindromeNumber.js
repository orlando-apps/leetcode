var isPalindrome = function(x){
   if ( x === 0) return true;
   if ( x < 0 || x % 10 === 0) return false;

   let reversed = 0;
   while (x > reversed ){
     let pop = x % 10  //gets the last digit of x, 1221 ==>  1
     x = Math.floor (x / 10)  //moves decimal to the right 1221 ==> 122.1 === > 122
     reversed = reversed * 10 + pop // 1

     console.table( {pop, reversed , x} )
   }
   if  ( x === reversed || x === Math.floor (reversed / 10)){
     return true
   } else {
     return false
   }
}

console.log( isPalindrome(0) );

//Space: O(1)
//Time: O(log10(n)), we are dividing the input by 10 for every iteration

// In order to reverse the a number,
// 1) we pop the last digit with %
// 2) we divide the number by 10, then math.floor to get the remaining
// 3) we add multply existing reverse w/10 and add pop