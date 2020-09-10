
var search = function(nums, target){
  let end = nums.length - 1;
  let start = 0;
  let mid = start + Math.floor( (end - start)/2 );

  while ( mid >= start && mid <= end){
    if (nums[mid] === target){
      return mid
    }else if ( nums[mid] < target ){
       start = mid + 1
    } else {
      end = mid - 1
    }
    mid = start + Math.floor( (end - start)/2 );
  }
  return -1
}


//let nums = [-1,0,3,5,9,12]
//console.log( search( nums, 9 ))
console.log( search( [5], 5 ))


// mid = start + Math.floor( (end - start)/2 );
// initiate while loop where mid in between and includes start and end
// check if mid is equal to target
// check if mid is less than target, if so, set start to mid + 1
// else set end to mid - 1
// set mid again