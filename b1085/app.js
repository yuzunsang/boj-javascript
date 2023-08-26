const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [x, y, w, h] = input[0].split(' ').map((item) => +item);
const arr = [w - x, h - y, x, y];

console.log(Math.min(...arr));