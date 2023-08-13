const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];

const arr = input[1].split(' ').map((item) => +item);
const M = Math.max(...arr);

for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i] / M) * 100;
}

let sum = arr.reduce((a, b) =>  a + b , 0);

console.log(sum / arr.length);