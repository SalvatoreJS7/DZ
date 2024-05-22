const arr =  [1, 13, "lol", 15];
const result = arr.map((value) => value % 2 !== 0 && value % 3 === 0)
console.log(result)