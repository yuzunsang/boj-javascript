const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];

for (let i = 1; i <= T; i++) {
    let str = input[i].trim();
    let end = str.length - 1;

    console.log(str.substring(0, 1) + str.substring(end, str.length));
}