const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const writtenSum = +input[0];
const n = +input[1];

let calSum = 0;

for (let i = 0; i < n; i++) {
    let [a, b] = input[i + 2].split(' ').map((item) => +item);
    calSum += a * b;
}

if (writtenSum === calSum) {
    console.log('Yes');
} else {
    console.log('No');
}