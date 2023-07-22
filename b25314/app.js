const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let cnt = Number(input[0]) / 4;
let output = '';

for (let i = 0; i < cnt; i++) {
    output += "long ";
}

console.log(`${output}int`);