const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);
input = input[0];

solution(input[0], input[1]);

function solution(A, B) {
    const stringB = String(B);
    const one = +stringB[2];
}