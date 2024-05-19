let arr = ['run', 'beatch', 'lol','hello', 'runner', 'herH'];

let result = arr.filter((value, i) => {return value[0].toLowerCase() === value[value.length - 1].toLowerCase()});
console.log(result)