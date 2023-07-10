const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const A = +input[0];
const B = +input[1];
const splitedB = input[1].split('').map((item) => +item);

solution(A, B, splitedB);

function solution(A, B, splitedB) {
    for (let i = 2; i >= 0; i--) {
        console.log(A * splitedB[i]);
    }

    console.log(A * B);
}