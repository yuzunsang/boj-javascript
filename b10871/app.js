const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [n, x] = input[0].split(' ').map((item) => +item);
const nums = input[1].split(' ').map((item) => +item);
let ans = [];

for (let i = 0; i < n; i++) {
    if (nums[i] < x) ans.push(nums[i]);
}

console.log(ans.join(' '));