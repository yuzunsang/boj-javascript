const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [h, m] = input[0].split(' ').map((item) => +item);
const costTime = +input[1];
let total = h * 60 + m + costTime;

if (total >= 24 * 60) total -= 24 * 60;

m = total % 60;
total -= m;
h = total / 60;

console.log(`${h} ${m}`);