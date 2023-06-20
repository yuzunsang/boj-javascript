const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0] / 4;
let long = 'long ';

console.log(`${long.repeat(n)}int`);