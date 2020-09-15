function kadane (array){
  let maxC = array[0];
  let maxG = array[0];
	for ( i = 1; i < array.length; i++) {
		maxC = Math.max(array[i], maxC + array[i])
		if (maxC > maxG){
			maxG = maxC;
		}
	}
	return maxG;
};

//let array = [ -2, 3, 2, -1]
let array2 = [2, 3, 3, 3, -10, 1, 10];

console.log(kadane (array2));