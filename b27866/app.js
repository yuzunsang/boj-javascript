const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const S = input[0].split('');
const i = +input[1];

console.log(S[i - 1]);