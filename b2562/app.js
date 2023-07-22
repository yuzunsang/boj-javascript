const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr = [];
for (let i = 0; i < input.length; i++) {
    arr.push(+input[i]);
}

solution(arr);

function solution(arr) {
    const max = Math.max(...arr);

    console.log(max);
    console.log(arr.indexOf(max) + 1);
}