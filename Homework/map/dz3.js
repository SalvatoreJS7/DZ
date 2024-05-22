const arr =  [10, 0, "lol", 100, "kek"];

const numbers = arr.filter((value) => value === Number(value));
const resultNum = numbers.map((value) => value * 137);
console.log(resultNum)