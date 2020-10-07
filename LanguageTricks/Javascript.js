//Create a new array
let dp = Array(5).fill(0)
console.log({dp})

//Create a matrix
let matrix = Array(3).fill().map(()=>Array(3).fill(0))
matrix[0][0] = 10;
console.log({matrix})

let dangerous = Array(3).fill(Array(3))
dangerous[0][0] = 10
console.log({dangerous})


//Javascript sort  -For arrays containing 10 or fewer elements, time complexity of .sort is O(n^2), and space complexity is O(1). For longer arrays time complexity is Θ(n log(n)) (average case), and space complexity is O(log(n))
//longer arrays are using quick sort