const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];

for (let i = 1; i <= T; i++) {
    let str = input[i].trim().split('');

    console.log(`${str[0]}${str[str.length - 1]}`)
}