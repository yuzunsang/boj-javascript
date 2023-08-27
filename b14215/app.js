const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let stick = input[0].split(' ').map((item) => +item);
stick.sort((a, b) => a - b);

while (stick[0] + stick[1] <= stick[2]) stick[2]--;

let sum = stick.reduce((a, b) => a + b);

console.log(sum);