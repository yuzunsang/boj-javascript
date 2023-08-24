const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let X = +input[0];
// 11

let groupCounter = 0;
const ascender = [];
const descender = [];

while (X > 0) {
    groupCounter++;
    X = X - groupCounter;
}

// console.log(X, groupCounter);
// -4 5

for (let i = 0; i < groupCounter; i++) {
    ascender.push(i + 1);
    descender.push(groupCounter - i);
}

// console.log(ascender);
// console.log(descender);
// [ 1, 2, 3, 4, 5 ]
// [ 5, 4, 3, 2, 1 ]

if (groupCounter % 2 === 0) {
    console.log(`${ascender[X + groupCounter - 1]}/${descender[X + groupCounter - 1]}`);
} else {
    console.log(`${descender[X + groupCounter - 1]}/${ascender[X + groupCounter - 1]}`);
}