const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const score = input[1].split(' ').map((item) => +item);
const max = Math.max(...score);

let sum = score.reduce((a, b) => a + b);

console.log((sum / N) / max * 100);