const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const papers = +input[0];
// 3
// let matrix = [];

for (let i = 1; i <= 3; i++) {
    let tempMat = [];
    // matrix.push(tempMat);

    let [x, y] = input[i].split(' ').map((item) => +item);

    tempMat += [x, y];
    tempMat += [x + 10, y + 10];
    console.log(tempMat);
}