const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input[0].split(' ').map((item) => +item);

console.log(num[0] - num[1]);