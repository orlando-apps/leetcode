var mergeSort = function(array){
  let len = array.length;
  if(len <= 1) return array;

  let mid = Math.floor (len/2)
  let left = [];
  let right = [];

  for (let i = 0; i < mid; i++){
    left.push(array[i])
  }

  for (let i = mid; i < array.length; i++){
    right.push(array[i])
  }

  let newLeft = mergeSort(left);
  let newRight = mergeSort(right);
  let final = merge(newLeft, newRight)

  return final
}

var merge = function(left, right){
  let l = 0, r = 0;
  let result = [];
  while ( l < left.length && r < right.length){
    if( left[l] < right[r] ){
      result.push(left[l])
      l++
    } else {
      result.push(right[r])
      r++
    }
  }
  while (l < left.length){
    result.push(left[l])
    l++
  }
  while( r < right.length){
    result.push(right[r])
    r++
  }
  return result;
}



let arr = [100, 3, 8, 6, 7, 5, 6, 10, 4, 5]
console.log(mergeSort(arr))