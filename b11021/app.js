const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const t = +input[0];

for (let i = 1; i <= t; i++) {
    let [a, b] = input[i].split(' ').map((item) => +item);
    console.log(`Case #${i}: ${a + b}`);
}