let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((prev, cur) => prev + cur) % 2 === 0;
console.log(result)