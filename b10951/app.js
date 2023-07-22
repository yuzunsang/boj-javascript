const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let nums = input[i].split(' ');
    console.log(Number(nums[0]) + Number(nums[1]));
}