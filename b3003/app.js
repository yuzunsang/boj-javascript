const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

let answer = [1, 1, 2, 2, 2, 8];

solution(input);

function solution(input) {
    let tempValue = [];
    for (let i = 0; i < 6; i++) {
        tempValue[i] = answer[i] - input[i];
    }
    
    console.log(tempValue.join(' '));
}