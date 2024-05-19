let coordinates = [{x:-2, y:-2}, {x:1, y:1}, {x:0, y:-4}, {x:6, y:25}, {x:-3, y:0}, {x:3, y:3}, {x:28, y:12}];
let radius = 3;
let centerCircle = [0, 0];

let result = coordinates.filter((value, i) => {return (value.x - centerCircle[0])**2 + (value.y - centerCircle[1])**2 <= radius**2});
console.log(result)