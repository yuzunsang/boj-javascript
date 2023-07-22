const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];

for (let i = 1; i <= n; i++) {
    let output = "";

    for (let j = n - 1; j >= i; j--) {
        output += ' ';
    }

    for (let j = 1; j <= i; j++) {
        output += '*';
    }

    console.log(output);
}