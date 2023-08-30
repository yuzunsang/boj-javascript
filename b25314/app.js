const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0] / 4;
let ans = "";

for (let i = 0; i < n; i++) ans += "long ";

console.log(`${ans}int`);