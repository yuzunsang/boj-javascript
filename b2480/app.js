const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
    let max = -1;
    let reward = 0;

    max = Math.max(a, b, c);

    if (a === b && b === c) {
        reward = 10000 + a * 1000;
    } else if (a !== b && b !== c && c !== a) {
        reward = max * 100;
    } else {
        if (a === b) {
            reward = 1000 + a * 100;
        } else if (b === c) {
            reward = 1000 + b * 100;
        } else {
            reward = 1000 + c * 100;
        }
    }
    
    console.log(reward);
}