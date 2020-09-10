
var search = function(nums, target){
  let start = 0;
  let end = nums.length - 1;
  let idx = recursion(nums, target, start, end)
  return idx;
}


var recursion = function(nums, target, start, end){
  let mid = start + Math.floor((end - start) / 2);
  if ( mid < start || mid > end) return -1;

  if (nums[mid] === target){
    return mid
  } else if ( nums[mid] < target){
    return recursion(nums, target, mid + 1, end)
  } else {
    return recursion(nums, target, start, mid - 1)
  }
}


let nums = [-1,0,3,5,9,12]
console.log( search( nums, 7 ))
console.log( search( [5], 5 ))
