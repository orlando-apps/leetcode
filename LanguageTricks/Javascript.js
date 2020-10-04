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