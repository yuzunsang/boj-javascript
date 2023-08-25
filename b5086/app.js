const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let i = 0;

while (1) {
    const [a, b] = input[i].split(' ').map((item) => +item);
    if (a === 0 && b === 0) break;

    if (a % b === 0) {
        console.log("multiple");

    } else if (b % a === 0) {
        console.log("factor");

    } else {
        console.log("neither");
    }

    i++;
}