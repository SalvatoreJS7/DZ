let coordinates = [{x:3, y:15}, {x:1, y:10}, {x:8, y:4}, {x:6, y:25}, {x:3, y:21}, {x:3, y:15}, {x:28, y:12}];

let result = coordinates.filter((value, i) => {return value.y % 3 === 0});
console.log(result)