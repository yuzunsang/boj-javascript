const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];

let range = 1, block = 1;

while (N > block) {
    block += 6 * range;
    range++;
}

console.log(range);