let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((prev, cur) => prev % 2 !== 0 && cur % 2 !== 0);
console.log(result)