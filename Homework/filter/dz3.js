let coordinates = [{x:3, y:15}, {x:1, y:10}, {x:8, y:4}, {x:6, y:25}, {x:3, y:20}, {x:3, y:15}, {x:28, y:11}];
let target = [{x:3, y:15}];

let result = coordinates.filter((value, i) => {return value.x === target[0].x && value.y === target[0].y});
console.log(result)