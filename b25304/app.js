const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let total = +input[0];
let cnt = +input[1];
let sum = 0;

for (let i = 1; i <= cnt; i++) {
    let tempValue = input[i + 1].split(' ').map((item) => +item);

    sum += tempValue[0] * tempValue[1];
}

console.log((total === sum) ? "Yes" : "No");