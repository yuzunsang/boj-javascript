const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [h, m] = input[0].split(' ').map((item) => +item);
let total = 60 * h + m - 45;

if (total < 0) total += 60 * 24;

m = total % 60;
total -= m;
h = total / 60;

console.log(`${h} ${m}`);