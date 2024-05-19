let coordinates = [{x:3, y:15}, {x:1, y:1}, {x:0, y:-4}, {x:6, y:25}, {x:3, y:5}, {x:3, y:3}, {x:28, y:12}];
let square = [[0, 0], [0, 5], [5, 5], [5, 0]];

let bigPoint = 0;
let smallPoint = 0;
for (let index = 0; index < square.length; index ++) {
    for (let indexIn = 0; indexIn < square[index].length; indexIn++) {
        if (square[index][indexIn] > bigPoint) {
            bigPoint = square[index][indexIn];
        }
        if (square[index][indexIn] < smallPoint) {
            smallPoint = square[index][indexIn];
        }
    }
}

let result = coordinates.filter((value, i) => {return value.x <= bigPoint && value.y <= bigPoint && value.x >= smallPoint && value.y >= smallPoint});
console.log(result)