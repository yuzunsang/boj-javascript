const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];

for (let i = 1; i <= n; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    console.log(a + b);
}