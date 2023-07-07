const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let newMatrix = [];

for (let i = 0; i < 9; i++) {
    let tempArr = input[i].split(' ').map((item) => +item);
    newMatrix.push(tempArr);
}
// saved to newMatrix.
let [max, arr, row] = [-1, -1, -1];

solution(max, arr, row, newMatrix);

function solution(max, arr, row, newMatrix) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (max < newMatrix[i][j]) {
                max = newMatrix[i][j];
                arr = i + 1;
                row = j + 1;
                position = `${arr} ${row}`; 
            }
        }
    }
    
    console.log(max);
    console.log(position);
}