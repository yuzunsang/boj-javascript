const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const nums = [];

for (let i = 0; i < 10; i++) {
    if (nums.indexOf(input[i] % 42) == -1) {
        nums.push(input[i] % 42);
    }
}

console.log(nums.length);