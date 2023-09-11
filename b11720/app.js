const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const nums = input[1].split('').map((item) => +item);

console.log(nums.reduce((a, b) => a + b));