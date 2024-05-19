let arr = [4, 'beatch', 5.3, 'hello', 3, 8 , -16, 'mandat'];

let result = arr.filter((value, i) => {return Number.isInteger(value)});
console.log(result)