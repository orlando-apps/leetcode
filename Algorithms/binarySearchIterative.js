
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
