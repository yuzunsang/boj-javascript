const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const nums = input[1].split('').map((item) => + item);
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum);